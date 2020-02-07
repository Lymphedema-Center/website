import React from "react";

const BoldIcon = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="#434343"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.6 11.79C16.57 11.12 17.25 10.02 17.25 9C17.25 6.74 15.5 5 13.25 5H8C7.45 5 7 5.45 7 6V18C7 18.55 7.45 19 8 19H13.78C15.85 19 17.74 17.31 17.75 15.23C17.76 13.7 16.9 12.39 15.6 11.79ZM10 7.5H13C13.83 7.5 14.5 8.17 14.5 9C14.5 9.83 13.83 10.5 13 10.5H10V7.5ZM10 16.5H13.5C14.33 16.5 15 15.83 15 15C15 14.17 14.33 13.5 13.5 13.5H10V16.5Z"
    />
  </svg>
);

export default BoldIcon;
