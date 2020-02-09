import React from "react";
import { filterProps } from "../../helpers";

interface SendIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const SendIcon = (props: SendIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#434343"}
    height={props.size}
    width={props.size}
    xmlns="http://www.w3.org/2000/svg"
    {...filterProps(props, ["color", "size"])}
  >
    <path d="M3.67126 20.4L21.1213 12.92C21.9313 12.57 21.9313 11.43 21.1213 11.08L3.67126 3.60002C3.01126 3.31002 2.28126 3.80002 2.28126 4.51002L2.27126 9.12002C2.27126 9.62002 2.64126 10.05 3.14126 10.11L17.2713 12L3.14126 13.88C2.64126 13.95 2.27126 14.38 2.27126 14.88L2.28126 19.49C2.28126 20.2 3.01126 20.69 3.67126 20.4Z" />
  </svg>
);

export default SendIcon;
