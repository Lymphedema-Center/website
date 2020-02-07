import React from "react";

const ErrorIcon = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="#434343"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.364 0 0 5.364 0 12C0 18.636 5.364 24 12 24C18.636 24 24 18.636 24 12C24 5.364 18.636 0 12 0ZM14.268 8.03998L12 10.308L9.73197 8.03998C9.50777 7.81528 9.20339 7.689 8.88596 7.689C8.56854 7.689 8.26416 7.81528 8.03996 8.03998C7.57196 8.50798 7.57196 9.26398 8.03996 9.73198L10.308 12L8.03996 14.268C7.57196 14.736 7.57196 15.492 8.03996 15.96C8.50797 16.428 9.26396 16.428 9.73197 15.96L12 13.692L14.268 15.96C14.736 16.428 15.492 16.428 15.96 15.96C16.428 15.492 16.428 14.736 15.96 14.268L13.692 12L15.96 9.73198C16.428 9.26398 16.428 8.50798 15.96 8.03998C15.492 7.58398 14.724 7.58398 14.268 8.03998ZM2.4 12C2.4 17.292 6.708 21.6 12 21.6C17.292 21.6 21.6 17.292 21.6 12C21.6 6.708 17.292 2.4 12 2.4C6.708 2.4 2.4 6.708 2.4 12Z"
    />
  </svg>
);

export default ErrorIcon;