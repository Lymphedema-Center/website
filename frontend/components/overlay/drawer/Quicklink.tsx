import React from "react";
import styled from "styled-components";
import SvgCircle from "../../decoration/SvgCircle";
import { filterProps, scrollToTop } from "../../helpers";

const QuicklinkView = styled.a`
  height: 60px;
  padding: 10px;
  display: grid;
  align-items: center;
  gap: 10px;
  grid-template-columns: max-content 1fr;
  background-color: ${(props) => props.theme.colors.fill.brand.green};
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
`;

const Label = styled.p`
  margin: 0;
  font-size: 1.6em;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text.normal};
`;

const Quicklink = React.forwardRef(
  (
    props: { svg: React.ReactNode; text: string } & React.HTMLProps<
      HTMLAnchorElement
    >,
    ref
  ) => {
    return (
      <QuicklinkView
        {...filterProps(props, ["svg", "text"])}
        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          if (props.onClick) {
            props.onClick(e);
          }
          scrollToTop();
        }}
      >
        <SvgCircle svg={props.svg} size="40px" color="white" />
        <Label>{props.text}</Label>
      </QuicklinkView>
    );
  }
);

export default Quicklink;
