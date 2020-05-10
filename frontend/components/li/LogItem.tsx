import React, { useContext } from "react";
import { filterProps } from "../helpers";
import styled from "styled-components";
import { ILog, Context as AppContext } from "../context/app/context";
import SvgButton from "../button/SvgButton";
import EditIcon from "../svg/icon/EditIcon";
import TrashIcon from "../svg/icon/TrashIcon";

const LogView = styled.li`
  list-style-type: none;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.colors.fill.grayscale.c200};
  border-radius: 5px;
  cursor: pointer;
  display: grid;
  align-content: start;
  padding: 10px;
  position: relative;
  gap: 5px;
`;

const LogTitle = styled.p`
  font-size: 1.8em;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.normal};
  margin: 0;
`;

const DateText = styled.p`
  font-size: 1.2em;
  color: #858585;
  margin: 0;
`;

const ButtonsView = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: grid;
  grid-auto-flow: column;
  gap: 5px;
`;

const CircleButton = styled(SvgButton)`
  background-color: ${(props) => props.theme.colors.fill.grayscale.c350};
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

const LogItem = (
  props: {
    log: ILog;
    editfn: () => void;
    deletefn: () => void;
  } & React.HTMLAttributes<HTMLLIElement>
) => {
  return (
    <LogView {...filterProps(props, ["log", "editfn"])}>
      <ButtonsView>
        <CircleButton
          height="32px"
          width="32px"
          svg={<EditIcon size="65%" />}
          onClick={(e: any) => {
            e.stopPropagation();
            props.editfn();
          }}
        />
        <CircleButton
          height="32px"
          width="32px"
          svg={<TrashIcon size="65%" />}
          onClick={(e: any) => {
            e.stopPropagation();
            props.deletefn();
          }}
        />
      </ButtonsView>
      <LogTitle>{props.log.title}</LogTitle>
      <DateText>{props.log.createdAt.toLocaleString()}</DateText>
    </LogView>
  );
};

export default LogItem;
