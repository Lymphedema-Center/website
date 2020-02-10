import React from "react";
import { filterProps } from "../../helpers";

interface CommentCheckIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const CommentCheckIcon = (props: CommentCheckIconProps) => (
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
      d="M4 2H20C21.1 2 22 2.9 22 4V16C22 17.1 21.1 18 20 18H6L2 22V4C2 2.9 2.9 2 4 2ZM6 16H19C19.55 16 20 15.55 20 15V5C20 4.45 19.55 4 19 4H5C4.45 4 4 4.45 4 5V18L6 16Z"
    />
    <path d="M9.86337 12.5833L7.55004 10.27C7.42548 10.1452 7.25638 10.075 7.08004 10.075C6.90369 10.075 6.73459 10.1452 6.61004 10.27C6.35004 10.53 6.35004 10.95 6.61004 11.21L9.39671 13.9967C9.65671 14.2567 10.0767 14.2567 10.3367 13.9967L17.39 6.94334C17.65 6.68334 17.65 6.26334 17.39 6.00334C17.2655 5.8785 17.0964 5.80835 16.92 5.80835C16.7437 5.80835 16.5746 5.8785 16.45 6.00334L9.86337 12.5833Z" />
  </svg>
);

export default CommentCheckIcon;
