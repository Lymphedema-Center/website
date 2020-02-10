import React from "react";
import { filterProps } from "../../helpers";

interface FirstNameIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const FirstNameIcon = (props: FirstNameIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#434343"}
    height={props.size}
    width={props.size}
    xmlns="http://www.w3.org/2000/svg"
    {...filterProps(props, ["color", "size"])}
  >
    <path d="M10.5 21V14.5H10C9.45 14.5 9 14.05 9 13.5V9C9 7.9 9.9 7 11 7H14C15.1 7 16 7.9 16 9V13.5C16 14.05 15.55 14.5 15 14.5H14.5V21C14.5 21.55 14.05 22 13.5 22H11.5C10.95 22 10.5 21.55 10.5 21Z" />
    <path d="M12.5 6C13.61 6 14.5 5.11 14.5 4C14.5 2.89 13.61 2 12.5 2C11.39 2 10.5 2.89 10.5 4C10.5 5.11 11.39 6 12.5 6Z" />
  </svg>
);

export default FirstNameIcon;
