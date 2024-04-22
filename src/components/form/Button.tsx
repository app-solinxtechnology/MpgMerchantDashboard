import React from "react";

interface Ibutton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  className?: string;
  id?: string
}

const Button: React.FC<Ibutton> = ({ className, children,id }) => {
  return (
    <button
       id={id}
      className={
        "text-sm  bg-primary rounded mb-1 text-white py-2 px-2 " +
        className
      }
    >
      {children}
    </button>
  );
};

export default Button;
