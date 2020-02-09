import React from "react";
import { filterProps } from "../../helpers";

interface Header1IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const Header1Icon = (props: Header1IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#434343"}
    height={props.size}
    width={props.size}
    xmlns="http://www.w3.org/2000/svg"
    {...filterProps(props, ["color", "size"])}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM12 16C12 16.55 12.45 17 13 17C13.55 17 14 16.55 14 16V8C14 7.45 13.55 7 13 7H11C10.45 7 10 7.45 10 8C10 8.55 10.45 9 11 9H12V16Z"
    />
  </svg>
);

export default Header1Icon;
