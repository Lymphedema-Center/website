import React from "react";
import { filterProps } from "../../helpers";

interface CheckIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const CheckIcon = (props: CheckIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#434343"}
    height={props.size}
    width={props.size}
    xmlns="http://www.w3.org/2000/svg"
    {...filterProps(props, ["color", "size"])}
  >
    <path d="M8.795 15.875L5.325 12.405C5.13817 12.2178 4.88452 12.1125 4.62 12.1125C4.35548 12.1125 4.10183 12.2178 3.915 12.405C3.525 12.795 3.525 13.425 3.915 13.815L8.095 17.995C8.485 18.385 9.115 18.385 9.505 17.995L20.085 7.41501C20.475 7.02501 20.475 6.39501 20.085 6.00501C19.8982 5.81776 19.6445 5.71252 19.38 5.71252C19.1155 5.71252 18.8618 5.81776 18.675 6.00501L8.795 15.875Z" />
  </svg>
);

export default CheckIcon;
