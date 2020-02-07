import React from "react";
import { filterProps } from "../../helpers";

interface PreviousIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size?: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const PreviousIcon = (props: PreviousIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#434343"}
    height={props.size ? props.size : null}
    width={props.size ? props.size : null}
    xmlns="http://www.w3.org/2000/svg"
    {...filterProps(props, ["color", "size"])}
  >
    <path d="M17.0725 17.18V6.81999C17.0725 6.02999 16.2025 5.54999 15.5325 5.97999L7.39251 11.16C6.77251 11.55 6.77251 12.45 7.39251 12.85L15.5325 18.02C16.2025 18.45 17.0725 17.97 17.0725 17.18Z" />
  </svg>
);

export default PreviousIcon;
