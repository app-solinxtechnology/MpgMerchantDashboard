import React from "react";

const CreateIcon: React.FC<ISvgProps> = ({ ...rest }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...rest} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="m9 4l2.5 5.5L17 12l-5.5 2.5L9 20l-2.5-5.5L1 12l5.5-2.5zm0 4.83L8 11l-2.17 1L8 13l1 2.17L10 13l2.17-1L10 11zM19 9l-1.26-2.74L15 5l2.74-1.25L19 1l1.25 2.75L23 5l-2.75 1.26zm0 14l-1.26-2.74L15 19l2.74-1.25L19 15l1.25 2.75L23 19l-2.75 1.26z"
      ></path>
    </svg>
  );
};

export default CreateIcon;
