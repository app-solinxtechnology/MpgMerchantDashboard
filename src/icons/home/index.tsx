const Home: React.FC<ISvgProps> = ({ ...rest }) => {
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 3L2 12h3v8h14v-8h3m-9 6h-2v-1h2m.5-2.42V16h-3v-1.42a3 3 0 1 1 3 0"
      ></path>
    </svg>
  );
};

export default Home;
