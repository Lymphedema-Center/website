import React from "react";
import { filterProps } from "../../helpers";

interface SignInIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const SignInIcon = (props: SignInIconProps) => (
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
      d="M10.9639 11.9639C13.1639 11.9639 14.9459 10.182 14.9459 7.98196C14.9459 5.78193 13.1639 4 10.9639 4C8.76388 4 6.98196 5.78193 6.98196 7.98196C6.98196 10.182 8.76388 11.9639 10.9639 11.9639ZM11.9594 19.9278L11.1033 19.0717C9.9286 17.897 9.93856 15.9857 11.1232 14.8309L11.9594 14.0146C11.5712 13.9748 11.2825 13.9549 10.9639 13.9549C8.30596 13.9549 3 15.2888 3 17.9368V19.0109C3 19.5173 3.41051 19.9278 3.91691 19.9278H11.9594ZM12.6463 17.6282L14.707 19.7088C15.0952 20.0971 15.7323 20.0971 16.1206 19.7088L21.2374 14.5522C21.6157 14.1739 21.6157 13.5567 21.2374 13.1685L21.2274 13.1585C20.8392 12.7703 20.212 12.7703 19.8238 13.1585L15.4138 17.5984L14.05 16.2346C13.6717 15.8463 13.0445 15.8463 12.6563 16.2346L12.6463 16.2445C12.268 16.6228 12.268 17.24 12.6463 17.6282Z"
    />
  </svg>
);

export default SignInIcon;
