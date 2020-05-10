import React, { useContext, useState } from "react";
import { Context as AppContext } from "../../context/app/context";
import {
  toggleEditLog,
  addNotification,
  updateLog,
} from "../../context/app/actions";
import styled from "styled-components";
import SvgButton from "../../button/SvgButton";
import SaveIcon from "../../svg/icon/SaveIcon";
import TitleIcon from "../../svg/icon/TitleIcon";
import CloseIcon from "../../svg/icon/CloseIcon";
import LogModal from "./LogModal";
import SlateEditor from "../../wysiwyg/SlateEditor";
import { Node } from "slate";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "../../input/TextInput";

const CircleButton = styled(SvgButton)`
  background-color: #b1b1b1;
  border-radius: 100px;

  &:active {
    box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.1);
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.1);
    }
  }
`;

// container
//////////////////////////////////////////////////////////////////////////
const Container = styled.div`
  display: grid;
  grid-template-rows: max-content minmax(0, 1fr);
  grid-template-columns: minmax(0, 1fr);
  padding: 10px;
  height: 100%;
  gap: 10px;
`;

// title input
//////////////////////////////////////////////////////////////////////////
const InputFields = styled.div`
  width: 100%;
  display: grid;
  gap: 5px;
`;
const ETextInput = styled(TextInput)`
  padding: 10px 0;
`;

// slate edtior
//////////////////////////////////////////////////////////////////////////
const ESlateEditor = styled(SlateEditor)`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.fill.grayscale.c150};
`;

const EditLogModal = (
  props: { id: string } & React.HTMLAttributes<HTMLDivElement>
) => {
  const appCtx = useContext(AppContext);
  const currentLog = appCtx.state.logs.find((l) => l.id === props.id);

  const formik = useFormik({
    initialValues: {
      title: currentLog ? currentLog.title : "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("sup dawg");
    },
  });

  // slate editor
  const [value, setValue] = useState<Node[]>(
    currentLog
      ? currentLog.content
      : [{ type: "paragraph", children: [{ text: "" }] }]
  );

  return (
    <LogModal
      headertext="Edit Log"
      buttons={
        <>
          <CircleButton
            height="32px"
            width="32px"
            svg={<SaveIcon size="65%" />}
            onClick={() => {
              if (currentLog) {
                appCtx.dispatch(
                  updateLog({
                    id: props.id,
                    createdAt: currentLog.createdAt,
                    title: formik.values.title,
                    content: value,
                  })
                );
                appCtx.dispatch(
                  addNotification("SUCCESS", "You log has been saved.", 2000)
                );
              }
              appCtx.dispatch(toggleEditLog(""));
            }}
          />
          <CircleButton
            height="32px"
            width="32px"
            svg={<CloseIcon size="65%" />}
            onClick={() => {
              appCtx.dispatch(toggleEditLog(""));
            }}
          />
        </>
      }
      {...props}
    >
      <Container>
        <InputFields>
          <ETextInput
            svg={<TitleIcon size="65%" />}
            inputProps={{
              name: "title",
              type: "text",
              placeholder: "Log Title",
              ...formik.getFieldProps("title"),
            }}
          />
        </InputFields>
        <ESlateEditor value={value} setValue={setValue} />
      </Container>
    </LogModal>
  );
};

export default EditLogModal;
