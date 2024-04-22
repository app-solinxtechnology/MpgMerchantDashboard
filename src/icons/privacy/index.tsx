const Privacy:React.FC<ISvgProps> = ({...rest}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 3.19L5 6.3V11c0 4.52 2.98 8.69 7 9.93c4.02-1.23 7-5.41 7-9.93V6.3zM13 17h-2v-6h2zm0-8h-2V7h2z"
        opacity=".3"
      ></path>
      <path
        fill="currentColor"
        d="m12 3.19l7 3.11V11c0 4.52-2.98 8.69-7 9.93c-4.02-1.24-7-5.41-7-9.93V6.3zM12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm-1 6h2v2h-2zm0 4h2v6h-2z"
      ></path>
    </svg>
  );
};

export default Privacy;
