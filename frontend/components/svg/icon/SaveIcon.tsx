import React from "react";
import { filterProps } from "../../helpers";

interface SaveIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const SaveIcon = (props: SaveIconProps) => (
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
      d="M17.59 3.59C17.21 3.21 16.7 3 16.17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V7.83C21 7.3 20.79 6.79 20.41 6.42L17.59 3.59ZM12 19C10.34 19 9 17.66 9 16C9 14.34 10.34 13 12 13C13.66 13 15 14.34 15 16C15 17.66 13.66 19 12 19ZM7 9H13C14.1 9 15 8.1 15 7C15 5.9 14.1 5 13 5H7C5.9 5 5 5.9 5 7C5 8.1 5.9 9 7 9Z"
    />
  </svg>
);

export default SaveIcon;
