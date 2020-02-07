import React from "react";
import { filterProps } from "../../helpers";

interface ForumPostIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size?: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const ForumPostIcon = (props: ForumPostIconProps) => (
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
      d="M15.5 1H4.5C3.4 1 2.5 1.9 2.5 3V16C2.5 16.55 2.95 17 3.5 17C4.05 17 4.5 16.55 4.5 16V4C4.5 3.45 4.95 3 5.5 3H15.5C16.05 3 16.5 2.55 16.5 2C16.5 1.45 16.05 1 15.5 1ZM16.09 5.59L20.92 10.42C21.29 10.79 21.5 11.3 21.5 11.83V21C21.5 22.1 20.6 23 19.5 23H8.49C7.39 23 6.5 22.1 6.5 21L6.51 7C6.51 5.9 7.4 5 8.5 5H14.67C15.2 5 15.71 5.21 16.09 5.59ZM20 12H15.5C14.95 12 14.5 11.55 14.5 11V6.5L20 12Z"
    />
  </svg>
);

export default ForumPostIcon;
