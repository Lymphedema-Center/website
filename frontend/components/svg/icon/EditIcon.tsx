import React from "react";
import { filterProps } from "../../helpers";

interface AvatarIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size?: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const AvatarIcon = (props: AvatarIconProps) => (
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
      d="M20.7088 5.63126C21.0988 6.02127 21.0988 6.65127 20.7088 7.04127L18.8788 8.87126L15.1288 5.12126L16.9588 3.29126C17.1456 3.10401 17.3993 2.99878 17.6638 2.99878C17.9283 2.99878 18.1819 3.10401 18.3688 3.29126L20.7088 5.63126ZM2.99878 20.5013V17.4613C2.99878 17.3213 3.04878 17.2013 3.14878 17.1013L14.0588 6.19126L17.8088 9.94127L6.88878 20.8513C6.79878 20.9513 6.66878 21.0013 6.53878 21.0013H3.49878C3.21878 21.0013 2.99878 20.7813 2.99878 20.5013Z"
    />
  </svg>
);

export default AvatarIcon;
