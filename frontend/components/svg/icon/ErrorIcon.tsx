import React from "react";
import { filterProps } from "../../helpers";

interface ErrorIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const ErrorIcon = (props: ErrorIconProps) => (
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
      d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM13.89 8.70001L12 10.59L10.11 8.70001C9.92314 8.51275 9.66949 8.40752 9.40497 8.40752C9.14045 8.40752 8.8868 8.51275 8.69997 8.70001C8.30997 9.09001 8.30997 9.72001 8.69997 10.11L10.59 12L8.69997 13.89C8.30997 14.28 8.30997 14.91 8.69997 15.3C9.08997 15.69 9.71997 15.69 10.11 15.3L12 13.41L13.89 15.3C14.28 15.69 14.91 15.69 15.3 15.3C15.69 14.91 15.69 14.28 15.3 13.89L13.41 12L15.3 10.11C15.69 9.72001 15.69 9.09001 15.3 8.70001C14.91 8.32001 14.27 8.32001 13.89 8.70001ZM4.00002 12C4.00002 16.41 7.59002 20 12 20C16.41 20 20 16.41 20 12C20 7.59002 16.41 4.00002 12 4.00002C7.59002 4.00002 4.00002 7.59002 4.00002 12Z"
    />
  </svg>
);

export default ErrorIcon;
