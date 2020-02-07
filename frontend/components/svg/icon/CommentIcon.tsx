import React from "react";
import { filterProps } from "../../helpers";

interface AvatarIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size?: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const AvatarIcon = (props: AvatarIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#434343"}
    height={props.size ? props.size : null}
    width={props.size ? props.size : null}
    xmlns="http://www.w3.org/2000/svg"
    {...filterProps(props, ["color", "size"])}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 2H20C21.1 2 22 2.9 22 4V16C22 17.1 21.1 18 20 18H6L2 22V4C2 2.9 2.9 2 4 2ZM6 16H19C19.55 16 20 15.55 20 15V5C20 4.45 19.55 4 19 4H5C4.45 4 4 4.45 4 5V18L6 16Z"
    />
  </svg>
);

export default AvatarIcon;
