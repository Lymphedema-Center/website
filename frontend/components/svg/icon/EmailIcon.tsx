import React from "react";
import { filterProps } from "../../helpers";

interface EmailIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const EmailIcon = (props: EmailIconProps) => (
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
      d="M2.02784 12.7179C1.59784 6.62787 6.62784 1.59787 12.7178 2.02787C18.0078 2.38787 21.9978 7.00787 21.9978 12.3179V13.4079C21.9978 14.8479 21.1778 16.2179 19.8378 16.7479C18.2078 17.3979 16.4278 16.7579 15.5378 15.5379C14.3878 16.7079 12.6378 17.2979 10.7978 16.8679C8.90784 16.4179 7.41784 14.8379 7.07784 12.9279C6.46784 9.50787 9.33784 6.56787 12.7378 7.05787C15.2178 7.40787 16.9978 9.66787 16.9978 12.1779V13.4279C16.9978 14.2179 17.7078 14.9979 18.4978 14.9979C19.2878 14.9979 19.9978 14.2179 19.9978 13.4279V12.3279C19.9978 8.59787 17.5778 5.17787 13.9578 4.25787C8.15784 2.75787 2.75784 8.16787 4.24784 13.9679C5.17784 17.5779 8.59784 19.9979 12.3278 19.9979H15.9978C16.5478 19.9979 16.9978 20.4479 16.9978 20.9979C16.9978 21.5479 16.5478 21.9979 15.9978 21.9979H12.3078C7.00784 21.9979 2.38784 18.0079 2.02784 12.7179ZM8.99783 11.9979C8.99783 13.6579 10.3378 14.9979 11.9978 14.9979C13.6578 14.9979 14.9978 13.6579 14.9978 11.9979C14.9978 10.3379 13.6578 8.99786 11.9978 8.99786C10.3378 8.99786 8.99783 10.3379 8.99783 11.9979Z"
    />
  </svg>
);

export default EmailIcon;
