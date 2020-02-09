import React from "react";
import { filterProps } from "../../helpers";

interface NextIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const NextIcon = (props: NextIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#434343"}
    height={props.size}
    width={props.size}
    xmlns="http://www.w3.org/2000/svg"
    {...filterProps(props, ["color", "size"])}
  >
    <path d="M6.92749 6.82001V17.18C6.92749 17.97 7.79749 18.45 8.46749 18.02L16.6075 12.84C17.2275 12.45 17.2275 11.55 16.6075 11.15L8.46749 5.98001C7.79749 5.55001 6.92749 6.03001 6.92749 6.82001Z" />
  </svg>
);

export default NextIcon;
