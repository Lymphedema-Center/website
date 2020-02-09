import React from "react";
import { filterProps } from "../../helpers";

interface CloseIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const CloseIcon = (props: CloseIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#434343"}
    height={props.size}
    width={props.size}
    xmlns="http://www.w3.org/2000/svg"
    {...filterProps(props, ["color", "size"])}
  >
    <path d="M18.3 5.71002C18.1132 5.52276 17.8595 5.41753 17.595 5.41753C17.3305 5.41753 17.0768 5.52276 16.89 5.71002L12 10.59L7.11 5.70002C6.92317 5.51276 6.66952 5.40753 6.405 5.40753C6.14048 5.40753 5.88683 5.51276 5.7 5.70002C5.31 6.09002 5.31 6.72002 5.7 7.11002L10.59 12L5.7 16.89C5.31 17.28 5.31 17.91 5.7 18.3C6.09 18.69 6.72 18.69 7.11 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.11002C18.68 6.73002 18.68 6.09002 18.3 5.71002Z" />
  </svg>
);

export default CloseIcon;
