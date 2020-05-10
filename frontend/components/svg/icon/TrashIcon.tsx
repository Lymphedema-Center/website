import React from "react";
import { filterProps } from "../../helpers";

interface TrashIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent. `"100px"` or `"25%"` */
  size: string;
  /** Should be any css compliant color string. `#434343`. */
  color?: string;
}

const TrashIcon = (props: TrashIconProps) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#434343"}
    xmlns="http://www.w3.org/2000/svg"
    {...filterProps(props, ["color", "size"])}
  >
    <path
      id="icon/action/delete_24px_2"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5 4H18C18.55 4 19 4.45 19 5C19 5.55 18.55 6 18 6H6C5.45 6 5 5.55 5 5C5 4.45 5.45 4 6 4H8.5L9.21 3.29C9.39 3.11 9.65 3 9.91 3H14.09C14.35 3 14.61 3.11 14.79 3.29L15.5 4ZM8 21C6.9 21 6 20.1 6 19V9C6 7.9 6.9 7 8 7H16C17.1 7 18 7.9 18 9V19C18 20.1 17.1 21 16 21H8Z"
    />
  </svg>
);

export default TrashIcon;
