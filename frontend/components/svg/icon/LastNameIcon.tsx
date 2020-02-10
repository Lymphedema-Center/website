import React from "react";
import { filterProps } from "../../helpers";

interface LastNameIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const LastNameIcon = (props: LastNameIconProps) => (
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
      d="M7.1951 6C8.3051 6 9.1951 5.11 9.1951 4C9.1951 2.89 8.3051 2 7.1951 2C6.0851 2 5.1951 2.89 5.1951 4C5.1951 5.11 6.0851 6 7.1951 6ZM5.1951 14.5V21C5.1951 21.55 5.6451 22 6.1951 22H8.1951C8.7451 22 9.1951 21.55 9.1951 21V14.5H9.6951C10.2451 14.5 10.6951 14.05 10.6951 13.5V9C10.6951 7.9 9.7951 7 8.6951 7H5.6951C4.5951 7 3.6951 7.9 3.6951 9V13.5C3.6951 14.05 4.1451 14.5 4.6951 14.5H5.1951ZM17.6951 16V21C17.6951 21.55 17.2451 22 16.6951 22H15.6951C15.1451 22 14.6951 21.55 14.6951 21V16H13.0851C12.3951 16 11.9151 15.33 12.1351 14.68L14.2351 8.37C14.5051 7.55 15.2751 7 16.1351 7H16.2551C17.1151 7 17.8751 7.55 18.1551 8.37L20.2551 14.68C20.4651 15.33 19.9851 16 19.3051 16H17.6951ZM18.1951 4C18.1951 5.11 17.3051 6 16.1951 6C15.0851 6 14.1951 5.11 14.1951 4C14.1951 2.89 15.0851 2 16.1951 2C17.3051 2 18.1951 2.89 18.1951 4Z"
    />
  </svg>
);

export default LastNameIcon;
