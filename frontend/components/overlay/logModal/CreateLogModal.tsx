import React, { useContext, useState } from "react";
import { Context as AppContext } from "../../context/app/context";
import {
  toggleCreateLog,
  addLog,
  addNotification,
} from "../../context/app/actions";
import styled from "styled-components";
import SvgButton from "../../button/SvgButton";
import SendIcon from "../../svg/icon/SendIcon";
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

const CreateLogModal = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const appCtx = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("sup dawg");
    },
  });

  // slate editor
  const [value, setValue] = useState<Node[]>([
    { type: "paragraph", children: [{ text: "" }] },
  ]);

  return (
    <LogModal
      headertext="Create Log"
      buttons={
        <>
          <CircleButton
            height="32px"
            width="32px"
            svg={<SendIcon size="65%" />}
            onClick={() => {
              appCtx.dispatch(addLog(formik.values.title, value));
              appCtx.dispatch(
                addNotification("SUCCESS", "Added a personal log.", 2000)
              );
              appCtx.dispatch(toggleCreateLog());
            }}
          />
          <CircleButton
            height="32px"
            width="32px"
            svg={<CloseIcon size="65%" />}
            onClick={() => {
              appCtx.dispatch(toggleCreateLog());
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

export default CreateLogModal;
