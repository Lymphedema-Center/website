import React from "react";

const CommentIcon = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="#434343"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 2H20C21.1 2 22 2.9 22 4V16C22 17.1 21.1 18 20 18H6L2 22V4C2 2.9 2.9 2 4 2ZM6 16H19C19.55 16 20 15.55 20 15V5C20 4.45 19.55 4 19 4H5C4.45 4 4 4.45 4 5V18L6 16Z"
    />
  </svg>
);

export default CommentIcon;
