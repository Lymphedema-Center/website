import React from "react";
import { filterProps } from "../../helpers";

interface SettingsIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size?: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const SettingsIcon = (props: SettingsIconProps) => (
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
      d="M17 8C17 8.55 16.55 9 16 9C15.45 9 15 8.55 15 8V4C15 3.45 15.45 3 16 3C16.55 3 17 3.45 17 4V5H20C20.55 5 21 5.45 21 6C21 6.55 20.55 7 20 7H17V8ZM4 7C3.45 7 3 6.55 3 6C3 5.45 3.45 5 4 5H13V7H4ZM4 19C3.45 19 3 18.55 3 18C3 17.45 3.45 17 4 17H9V19H4ZM13 20V19H20C20.55 19 21 18.55 21 18C21 17.45 20.55 17 20 17H13V16C13 15.45 12.55 15 12 15C11.45 15 11 15.45 11 16V20C11 20.55 11.45 21 12 21C12.55 21 13 20.55 13 20ZM7 11V10C7 9.45 7.45 9 8 9C8.55 9 9 9.45 9 10V14C9 14.55 8.55 15 8 15C7.45 15 7 14.55 7 14V13H4C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11H7ZM21 12C21 11.45 20.55 11 20 11H11V13H20C20.55 13 21 12.55 21 12Z"
    />
  </svg>
);

export default SettingsIcon;
