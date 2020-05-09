import React, { useRef, useCallback } from "react";
import styled from "styled-components";
import SquareButton from "../button/SquareButton";
import BoldIcon from "../svg/icon/BoldIcon";
import ItalicIcon from "../svg/icon/ItalicIcon";
import UnderlineIcon from "../svg/icon/UnderlineIcon";
import Header1Icon from "../svg/icon/Header1Icon";
import Header2Icon from "../svg/icon/Header2Icon";
import ImageIcon from "../svg/icon/ImageIcon";
import { useSlate, ReactEditor } from "slate-react";
import { Editor, Transforms } from "slate";

const Container = styled.div`
  display: grid;
  grid-template-rows: max-content;
  grid-auto-flow: column;
  height: 45px;
  border-radius: 5px;
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  z-index: 1;
  justify-self: center;
  gap: 10px;
  margin-top: 10px;
`;

// button container
///////////////////////////////////////////////////////////////////////////
const ButtonBar = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 5px;
  padding: 5px;
  background-color: white;
  border-radius: 10px;
`;

// editor helpers
///////////////////////////////////////////////////////////////////////////
const CustomEditor = {
  isMarkActive: (editor: any, format: any) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  },
  toggleMark: (editor: any, format: any) => {
    const isActive = CustomEditor.isMarkActive(editor, format);

    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }

    ReactEditor.focus(editor);
  },
  isBlockActive: (editor: any, format: any) => {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === format,
    });

    return !!match;
  },
  toggleBlock: (editor: any, format: any) => {
    const isActive = CustomEditor.isBlockActive(editor, format);

    Transforms.setNodes(editor, {
      type: isActive ? "paragraph" : format,
    });

    ReactEditor.focus(editor);
  },
  insertImage: (editor: any, src: any) => {
    const children = [{ text: "" }];

    const image = { type: "image", src: src, children };

    if (
      editor.children.length === 1 &&
      editor.children[0].children.length === 1 &&
      editor.children[0].children[0].text === ""
    ) {
      Transforms.setNodes(editor, image);
    } else {
      Transforms.insertNodes(editor, image);
    }

    const paragraph = { type: "paragraph", children };
    Transforms.insertNodes(editor, paragraph);

    ReactEditor.focus(editor);
  },
};

const SlateToolbar = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const editor = useSlate();
  const imageInput = useRef<HTMLInputElement>(null);

  const handleInputChange = useCallback(
    async (editor: Editor, fileList: FileList | null) => {
      if (fileList && fileList[0]) {
        // get src value
        const reader = new FileReader();
        reader.addEventListener("load", async (e: any) => {
          CustomEditor.insertImage(editor, reader.result);
        });
        reader.readAsDataURL(fileList[0]);
      }
      imageInput!.current!.value = "";
    },
    []
  );

  return (
    <Container {...props}>
      <ButtonBar>
        <SquareButton
          svg={<BoldIcon size="55%" />}
          on={CustomEditor.isMarkActive(editor, "bold")}
          onClick={(e: any) => {
            e.preventDefault();
            CustomEditor.toggleMark(editor, "bold");
          }}
        />
        <SquareButton
          svg={<ItalicIcon size="55%" />}
          on={CustomEditor.isMarkActive(editor, "italic")}
          onClick={(e: any) => {
            e.preventDefault();
            CustomEditor.toggleMark(editor, "italic");
          }}
        />
        <SquareButton
          svg={<UnderlineIcon size="55%" />}
          on={CustomEditor.isMarkActive(editor, "underline")}
          onClick={(e: any) => {
            e.preventDefault();
            CustomEditor.toggleMark(editor, "underline");
          }}
        />
      </ButtonBar>
      <ButtonBar>
        <SquareButton
          svg={<Header1Icon size="55%" />}
          on={CustomEditor.isMarkActive(editor, "header1")}
          onClick={(e: any) => {
            e.preventDefault();
            CustomEditor.toggleMark(editor, "header1");
          }}
        />
        <SquareButton
          svg={<Header2Icon size="55%" />}
          on={CustomEditor.isMarkActive(editor, "header2")}
          onClick={(e: any) => {
            e.preventDefault();
            CustomEditor.toggleMark(editor, "header2");
          }}
        />
      </ButtonBar>
      <ButtonBar>
        <input
          type="file"
          accept="image/*"
          ref={imageInput}
          style={{ display: "none" }}
          onChange={() => handleInputChange(editor, imageInput!.current!.files)}
        />
        <SquareButton
          svg={<ImageIcon size="55%" />}
          on={false}
          onClick={(e: any) => {
            e.preventDefault();
            if (imageInput && imageInput.current) {
              imageInput.current.click();
            }
          }}
        />
      </ButtonBar>
    </Container>
  );
};

export default SlateToolbar;
