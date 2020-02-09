import React from "react";
import { filterProps } from "../../helpers";

interface NotebookIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Should be size in pixels or percent, `"100px"` or `"25%"`. */
  size: string;
  /** Should be any css compliant color string, `#434343"`. */
  color?: string;
}

const NotebookIcon = (props: NotebookIconProps) => (
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
      d="M19.6 22.08H3.6V1.81332H12.6667V0.213318H3.6C2.71634 0.213318 2 0.929662 2 1.81332V22.08C2 22.9636 2.71634 23.68 3.6 23.68H19.6C20.4837 23.68 21.2 22.9636 21.2 22.08V11.9467H19.6V22.08Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.3306 2.20797L21.1999 1.0773C20.5752 0.4534 19.5633 0.4534 18.9386 1.0773C18.9386 1.0773 10.0479 9.9573 9.91459 10.496L9.51459 12.096C9.37766 12.6416 9.53732 13.219 9.93509 13.6168C10.3329 14.0146 10.9103 14.1742 11.4559 14.0373L13.0559 13.6373C13.5893 13.4986 22.3306 4.47463 22.3306 4.47463C22.9545 3.84996 22.9545 2.83798 22.3306 2.2133V2.20797ZM13.6906 10.848L12.5973 9.75465L12.5599 9.72265L20.0693 2.21332L21.1999 3.34398L13.6906 10.848Z"
    />
  </svg>
);

export default NotebookIcon;
