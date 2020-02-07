import React from "react";

const DeltaIcon = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="#434343"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.16287 18.7627L11.0754 4.51356C11.4993 3.82881 12.4992 3.82881 12.9231 4.51356L21.8356 18.7627C22.2812 19.4909 21.7704 20.4256 20.9117 20.4256H3.08672C2.23895 20.4256 1.71724 19.4909 2.16287 18.7627ZM18.9444 18.2519L11.9992 7.13297L5.05396 18.2519H18.9444Z"
    />
  </svg>
);

export default DeltaIcon;
