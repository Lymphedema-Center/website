import React from "react";
import { filterProps } from "../../helpers";

interface ResetIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const ResetIcon = (props: ResetIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill={props.color ? props.color : "#434343"}
    height={props.size}
    width={props.size}
    xmlns="http://www.w3.org/2000/svg"
    {...filterProps(props, ["color", "size"])}
  >
    <path d="M11.9622 5.64249V2.85249C11.9622 2.40249 11.4222 2.18249 11.1122 2.50249L7.31219 6.29249C7.11219 6.49249 7.11219 6.80249 7.31219 7.00249L11.1022 10.7925C11.4222 11.1025 11.9622 10.8825 11.9622 10.4325V7.64249C15.6922 7.64249 18.6422 11.0625 17.8222 14.9325C17.3522 17.2025 15.5122 19.0325 13.2522 19.5025C9.68219 20.2525 6.50219 17.8025 6.02219 14.4925C5.95219 14.0125 5.53219 13.6425 5.04219 13.6425C4.44219 13.6425 3.96219 14.1725 4.04219 14.7725C4.66219 19.1625 8.84219 22.4125 13.5722 21.4925C16.6922 20.8825 19.2022 18.3725 19.8122 15.2525C20.8022 10.1225 16.9022 5.64249 11.9622 5.64249Z" />
  </svg>
);

export default ResetIcon;
