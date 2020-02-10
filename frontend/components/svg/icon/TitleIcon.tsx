import React from "react";
import { filterProps } from "../../helpers";

interface TitleIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const TitleIcon = (props: TitleIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#434343"}
    height={props.size}
    width={props.size}
    xmlns="http://www.w3.org/2000/svg"
    {...filterProps(props, ["color", "size"])}
  >
    <path d="M5 6C5 6.83 5.67 7.5 6.5 7.5H10.5V18C10.5 18.83 11.17 19.5 12 19.5C12.83 19.5 13.5 18.83 13.5 18V7.5H17.5C18.33 7.5 19 6.83 19 6C19 5.17 18.33 4.5 17.5 4.5H6.5C5.67 4.5 5 5.17 5 6Z" />
  </svg>
);

export default TitleIcon;
