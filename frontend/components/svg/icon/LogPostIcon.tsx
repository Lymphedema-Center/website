import React from "react";
import { filterProps } from "../../helpers";

interface LogPostIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size?: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const LogPostIcon = (props: LogPostIconProps) => (
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
      d="M20.71 4.04207C21.1 3.65211 21.1 3.02217 20.71 2.63221L18.37 0.292455C18.1832 0.105222 17.9295 0 17.665 0C17.4005 0 17.1468 0.105222 16.96 0.292455L15 2.25225L18.75 6.00186L20.71 4.04207ZM17.75 7.00176L14 3.25215L4.15 13.1011C4.05 13.2011 4 13.3211 4 13.4611V16.5008C4 16.7807 4.22 17.0007 4.5 17.0007H7.54C7.67 17.0007 7.8 16.9507 7.89 16.8507L17.75 7.00176ZM22 20.0004H2C0.9 20.0004 0 20.9003 0 22.0002C0 23.1001 0.9 24 2 24H22C23.1 24 24 23.1001 24 22.0002C24 20.9003 23.1 20.0004 22 20.0004Z"
    />
  </svg>
);

export default LogPostIcon;
