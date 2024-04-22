const Package: React.FC<ISvgProps> = ({ ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M5.12 5h13.75l-.94-1h-12zm15.42.23c.29.34.46.77.46 1.27V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6.5c0-.5.17-.93.46-1.27l1.38-1.68C5.12 3.21 5.53 3 6 3h12c.47 0 .88.21 1.15.55zM6 18h6v-3H6z"
      ></path>
    </svg>
  );
};

export default Package;
