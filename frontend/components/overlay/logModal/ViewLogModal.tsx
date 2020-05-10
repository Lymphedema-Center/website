import React, { useContext, useMemo, useState } from "react";
import { Context as AppContext } from "../../context/app/context";
import { toggleViewLog } from "../../context/app/actions";
import styled from "styled-components";
import SvgButton from "../../button/SvgButton";
import CloseIcon from "../../svg/icon/CloseIcon";
import LogModal from "./LogModal";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

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

const Container = styled.div`
  padding: 15px;
`;

// elements
//////////////////////////////////////////////////////////////////
const SlateHeader1 = (props: any) => (
  <h2 className="SlateHeader1" {...props.attributes}>
    {props.children}
  </h2>
);

const SlateHeader2 = (props: any) => (
  <h3 className="SlateHeader2" {...props.attributes}>
    {props.children}
  </h3>
);

const SlateParagraph = (props: any) => (
  <p className="SlateParagraph" {...props.attributes}>
    {props.children}
  </p>
);

const SlateImage = (props: any) => {
  return (
    <div {...props.attributes}>
      <div contentEditable={false}>
        <img alt="loading" className="SlateImage" src={props.element.src} />
      </div>
      {props.children}
    </div>
  );
};

const customIsVoid = (element: any) =>
  element.type === "image" ? true : false;

const renderElement = (props: any) => {
  switch (props.element.type) {
    case "image":
      return <SlateImage {...props} />;
    case "header1":
      return <SlateHeader1 {...props} />;
    case "header2":
      return <SlateHeader2 {...props} />;
    case "paragraph":
      return <SlateParagraph {...props} />;
  }
};

// leaf
//////////////////////////////////////////////////////////////////
const SlateLeaf = (props: any) => {
  let children = props.children;

  return (
    <span
      {...props.attributes}
      style={{
        fontWeight: props.leaf.bold ? "700" : "400",
        fontStyle: props.leaf.italic ? "italic" : "normal",
        textDecoration: props.leaf.underline ? "underline" : "none",
      }}
    >
      {children}
    </span>
  );
};

const renderLeaf = (props: any) => <SlateLeaf {...props} />;

const ViewLogModal = (
  props: { id: string } & React.HTMLAttributes<HTMLDivElement>
) => {
  const appCtx = useContext(AppContext);
  const [value, setValue] = useState(
    appCtx.state.logs.find((log) => log.id === props.id)!.content
  );
  const editor = useMemo(() => withReact(createEditor()), []);

  return (
    <LogModal
      headertext="View Log"
      buttons={
        <>
          <CircleButton
            height="32px"
            width="32px"
            svg={<CloseIcon size="65%" />}
            onClick={() => {
              appCtx.dispatch(toggleViewLog(""));
            }}
          />
        </>
      }
      {...props}
    >
      <Slate
        editor={editor}
        value={value}
        isVoid={customIsVoid}
        onChange={(value) => {
          setValue(value);
        }}
      >
        <Container>
          <Editable
            renderElement={renderElement as any}
            renderLeaf={renderLeaf}
            readOnly
          />
        </Container>
      </Slate>
    </LogModal>
  );
};

export default ViewLogModal;
