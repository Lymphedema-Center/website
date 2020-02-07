import React from "react";
import { filterProps } from "../../helpers";

interface UnderlineIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size?: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const UnderlineIcon = (props: UnderlineIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#434343"}
    height={props.size ? props.size : null}
    width={props.size ? props.size : null}
    xmlns="http://www.w3.org/2000/svg"
    {...filterProps(props, ["color", "size"])}
  >
    <path d="M12.7896 18.9491C15.8194 18.5592 17.9993 15.8393 17.9993 12.7895V6.24992C17.9993 5.55997 17.4393 5 16.7493 5C16.0594 5 15.4994 5.55997 15.4994 6.24992V12.8995C15.4994 14.5694 14.3695 16.0893 12.7296 16.4193C10.4797 16.8893 8.49985 15.1694 8.49985 12.9995V6.24992C8.49985 5.55997 7.93988 5 7.24992 5C6.55997 5 6 5.55997 6 6.24992V12.9995C6 16.5693 9.12981 19.4191 12.7896 18.9491Z" />
  </svg>
);

export default UnderlineIcon;
