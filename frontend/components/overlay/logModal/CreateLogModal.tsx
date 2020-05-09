import React, { useContext } from "react";
import { Context as AppContext } from "../../context/app/context";
import { toggleCreateLog } from "../../context/app/actions";
import styled from "styled-components";
import SvgButton from "../../button/SvgButton";
import SendIcon from "../../svg/icon/SendIcon";
import CloseIcon from "../../svg/icon/CloseIcon";
import LogModal from "./LogModal";
import SlateEditor from "../../wysiwyg/SlateEditor";
import { Node } from "slate";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../input/ErrorMessage";
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

const CreateLogModal = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const appCtx = useContext(AppContext);

  return (
    <LogModal
      headertext="Create Log"
      buttons={
        <>
          <CircleButton
            height="32px"
            width="32px"
            svg={<SendIcon size="65%" />}
          />
          <CircleButton
            height="32px"
            width="32px"
            svg={<CloseIcon size="65%" />}
            onClick={() => appCtx.dispatch(toggleCreateLog())}
          />
        </>
      }
      {...props}
    ></LogModal>
  );
};

export default CreateLogModal;
