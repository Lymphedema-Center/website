import React from "react";
import { filterProps } from "../../helpers";

interface ShieldIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const ShieldIcon = (props: ShieldIconProps) => (
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
      d="M12.3743 1.63806C20.5645 1.63806 21.1105 3.82212 21.1105 3.82212V11.0841C21.1108 15.0285 18.9839 18.6664 15.5466 20.6012L12.3743 22.3866L9.20193 20.6012C5.76464 18.6664 3.63781 15.0285 3.63804 11.0841V3.82212C3.63804 3.82212 3.63804 1.63806 12.3743 1.63806ZM12.3743 0C8.49212 0 5.67468 0.425892 3.99841 1.26675C2.14742 2.19498 2 3.45081 2 3.82211V11.0841C2.00866 15.6116 4.45366 19.784 8.3993 22.0044L11.5716 23.7899C12.0701 24.07 12.6785 24.07 13.1769 23.7899L16.3493 22.0044C20.2949 19.784 22.7399 15.6116 22.7486 11.0841V3.82211C22.7486 3.68773 22.7321 3.55386 22.6994 3.42351C22.3773 2.14584 20.6136 0 12.3743 0Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.8283 15.0154C11.6111 15.0152 11.403 14.9288 11.2495 14.7751L7.4274 10.953C7.1267 10.6303 7.13557 10.1274 7.44747 9.81555C7.75936 9.50365 8.26224 9.49478 8.58495 9.79548L11.8283 13.0388L17.2557 7.61142C17.5784 7.31072 18.0813 7.31959 18.3932 7.63149C18.705 7.94339 18.7139 8.44627 18.4132 8.76897L12.4071 14.7751C12.2536 14.9288 12.0454 15.0152 11.8283 15.0154Z"
    />
  </svg>
);

export default ShieldIcon;
