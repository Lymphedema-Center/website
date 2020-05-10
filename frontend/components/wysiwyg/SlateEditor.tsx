import React, { useMemo } from "react";
import styled from "styled-components";
import { createEditor, Node, Text } from "slate";
import {
  Slate,
  Editable,
  withReact,
  useSelected,
  useFocused,
} from "slate-react";
import { withHistory } from "slate-history";
import SlateToolbar from "./SlateToolbar";
import escapeHtml from "escape-html";

// container
//////////////////////////////////////////////////////////////////
const OverallContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 10px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 1fr;
`;

const Container = styled.div`
  padding: 5px;
  padding-top: 60px;
  border-radius: 5px;
  font-size: 16px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  display: grid;
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
`;

// slate toolbar
//////////////////////////////////////////////////////////////////
const ESlateToolbar = styled(SlateToolbar)`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  z-index: 51;
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
  const selected = useSelected();
  const focused = useFocused();
  return (
    <div {...props.attributes}>
      <div contentEditable={false}>
        <img
          alt="loading"
          className="SlateImage"
          src={props.element.src}
          style={{
            boxShadow: selected && focused ? "0 0 0 3px #B4D5FF" : "none",
          }}
        />
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

// serialize
//////////////////////////////////////////////////////////////////
export const serialize = (node: Node): any => {
  if (Text.isText(node)) {
    return (
      '<span style="' +
      (node.bold ? "font-weight: 700;" : "") +
      (node.italic ? "font-style: italic;" : "") +
      (node.underline ? "text-decoration: underline;" : "") +
      `">${escapeHtml(node.text)}</span`
    );
  }

  const children = node.children.map((n) => serialize(n)).join("");

  switch (node.type) {
    case "image":
      return `<img className="SlateImage" src="${node.src}" style="${node.style}" />`;
    case "header1":
      return `<h2 className="SlateHeader1">${children}</h2>`;
    case "header2":
      return `<h3 className="SlateHeader2">${children}</h3>`;
    case "paragraph":
      return `<p className="SlateParagraph">${children}</p>`;
    default:
      return children;
  }
};

// SlateEditor
//////////////////////////////////////////////////////////////////
const SlateEditor = (
  props: {
    value: Node[];
    setValue: (value: Node[]) => void;
  } & React.HTMLAttributes<HTMLDivElement>
) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <Slate
      editor={editor}
      value={props.value}
      isVoid={customIsVoid}
      onChange={(value) => {
        props.setValue(value);
      }}
    >
      <OverallContainer {...props}>
        <ESlateToolbar />
        <Container>
          <Editable
            renderElement={renderElement as any}
            renderLeaf={renderLeaf}
            autoFocus
          />
        </Container>
      </OverallContainer>
    </Slate>
  );
};

export default SlateEditor;
