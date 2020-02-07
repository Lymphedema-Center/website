import React from "react";

const Header2Icon = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="#434343"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM13 13C14.1 13 15 12.1 15 11V9C15 7.9 14.1 7 13 7H10C9.45 7 9 7.45 9 8C9 8.55 9.45 9 10 9H13V11H11C9.9 11 9 11.9 9 13V16C9 16.55 9.45 17 10 17H14C14.55 17 15 16.55 15 16C15 15.45 14.55 15 14 15H11V13H13Z"
    />
  </svg>
);

export default Header2Icon;
