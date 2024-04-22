import { createRipples } from "react-ripples";

const MyRipples = createRipples({
  color: "#64b5f670",
  during: 2000,
});

const Wave = ({
  children,
  color,
  className,
  onClick,
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <MyRipples
      onClick={onClick}
      color={color}
    className={`w-full ${className}`}
    >
      {children}
    </MyRipples>
  );
};

export default Wave;
