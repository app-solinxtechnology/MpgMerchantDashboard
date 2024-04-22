const ChevronDwon:React.FC<ISvgProps> = ({...rest}) => {
  return (
    <svg
    {...rest}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
      ></path>
    </svg>
  );
};

export default ChevronDwon;
