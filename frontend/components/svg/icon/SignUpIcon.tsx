import React from "react";
import { filterProps } from "../../helpers";

interface SignUpIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size?: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const SignUpIcon = (props: SignUpIconProps) => (
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
      d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C12.79 4 11 5.79 11 8C11 10.21 12.79 12 15 12ZM6 10V8C6 7.45 5.55 7 5 7C4.45 7 4 7.45 4 8V10H2C1.45 10 1 10.45 1 11C1 11.55 1.45 12 2 12H4V14C4 14.55 4.45 15 5 15C5.55 15 6 14.55 6 14V12H8C8.55 12 9 11.55 9 11C9 10.45 8.55 10 8 10H6ZM7 18C7 15.34 12.33 14 15 14C17.67 14 23 15.34 23 18V19C23 19.55 22.55 20 22 20H8C7.45 20 7 19.55 7 19V18Z"
    />
  </svg>
);

export default SignUpIcon;
