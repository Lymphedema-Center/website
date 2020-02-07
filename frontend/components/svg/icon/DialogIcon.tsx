import React from "react";
import { filterProps } from "../../helpers";

interface DialogIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size?: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const DialogIcon = (props: DialogIconProps) => (
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
      d="M22.3636 7.54545H17.4545V2.63636C17.4545 1.73262 16.7219 1 15.8182 1H1.63636C0.732625 1 0 1.73262 0 2.63636V11.3636C0 12.2674 0.732625 13 1.63636 13H1.94727L1.75636 13.4855C1.49855 14.1282 1.67329 14.8637 2.19265 15.3218C2.71202 15.7799 3.46353 15.8615 4.06909 15.5255L6.54545 14.1509V17.9145C6.54545 18.8183 7.27808 19.5509 8.18182 19.5509H15.3927L19.9309 22.0709C20.5365 22.4069 21.288 22.3254 21.8073 21.8673C22.3267 21.4091 22.5014 20.6737 22.2436 20.0309L22.0527 19.5455H22.3636C23.2674 19.5455 24 18.8128 24 17.9091V9.18182C24 8.27808 23.2674 7.54545 22.3636 7.54545ZM6.54546 9.18182V12.2745L3.27273 14.0909L4.36364 11.3636H1.63637V2.63637H15.8182V7.54546H8.18182C7.27808 7.54546 6.54546 8.27808 6.54546 9.18182ZM22.3636 17.9091H19.6364L20.7273 20.6364L15.8182 17.9091H8.18182V9.18182H22.3636V17.9091Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.3636 12.4545H20.1818C20.6337 12.4545 21 12.0882 21 11.6364C21 11.1845 20.6337 10.8182 20.1818 10.8182H10.3636C9.91175 10.8182 9.54544 11.1845 9.54544 11.6364C9.54544 12.0882 9.91175 12.4545 10.3636 12.4545Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.3636 15.7273H20.1818C20.6337 15.7273 21 15.361 21 14.9091C21 14.4573 20.6337 14.0909 20.1818 14.0909H10.3636C9.91175 14.0909 9.54544 14.4573 9.54544 14.9091C9.54544 15.361 9.91175 15.7273 10.3636 15.7273Z"
    />
  </svg>
);

export default DialogIcon;
