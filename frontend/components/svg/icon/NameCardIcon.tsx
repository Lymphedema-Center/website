import React from "react";
import { filterProps } from "../../helpers";

interface NameCardIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size?: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const NameCardIcon = (props: NameCardIconProps) => (
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
      d="M22 3H2C0.9 3 0 3.9 0 5V19C0 20.1 0.9 21 2 21H22C23.1 21 23.99 20.1 23.99 19L24 5C24 3.9 23.1 3 22 3ZM8.00002 6C9.66002 6 11 7.34 11 9C11 10.66 9.66002 12 8.00002 12C6.34002 12 5.00002 10.66 5.00002 9C5.00002 7.34 6.34002 6 8.00002 6ZM2.00002 17V18H14V17C14 15 10 13.9 8.00001 13.9C6.00001 13.9 2.00002 15 2.00002 17ZM21 8H15C14.45 8 14 7.55 14 7C14 6.45 14.45 6 15 6H21C21.55 6 22 6.45 22 7C22 7.55 21.55 8 21 8ZM15 12H21C21.55 12 22 11.55 22 11C22 10.45 21.55 9.99998 21 9.99998H15C14.45 9.99998 14 10.45 14 11C14 11.55 14.45 12 15 12Z"
    />
  </svg>
);

export default NameCardIcon;
