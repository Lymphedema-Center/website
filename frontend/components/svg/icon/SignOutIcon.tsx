import React from "react";
import { filterProps } from "../../helpers";

interface SignOutIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const SignOutIcon = (props: SignOutIconProps) => (
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
      d="M15 8C15 10.21 13.21 12 11 12C8.79 12 7 10.21 7 8C7 5.79 8.79 4 11 4C13.21 4 15 5.79 15 8ZM3 18C3 15.34 8.33 14 11 14C11.1659 14 11.3422 14.0052 11.5267 14.0155C11.4049 14.5842 11.5649 15.2012 12.0068 15.6431L13.4899 17.1262L12.0068 18.6094C11.6257 18.9905 11.4543 19.5018 11.4925 20H4C3.45 20 3 19.55 3 19V18ZM15.661 14.2445L17.0293 15.6128L18.3976 14.2445C18.7739 13.8682 19.3897 13.8682 19.766 14.2445C20.1422 14.6208 20.1422 15.2365 19.766 15.6128L18.3976 16.9811L19.766 18.3494C20.1422 18.7257 20.1422 19.3415 19.766 19.7178C19.3897 20.094 18.7739 20.094 18.3976 19.7178L17.0293 18.3494L15.661 19.7178C15.2847 20.094 14.669 20.094 14.2927 19.7178C13.9164 19.3415 13.9164 18.7257 14.2927 18.3494L15.661 16.9811L14.2927 15.6128C13.9164 15.2365 13.9164 14.6208 14.2927 14.2445C14.669 13.8682 15.2847 13.8682 15.661 14.2445Z"
    />
  </svg>
);

export default SignOutIcon;
