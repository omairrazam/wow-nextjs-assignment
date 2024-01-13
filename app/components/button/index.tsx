import React from "react";

interface ButtonProps {
  children: string;
  type?: "primary" | "secondary";
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="w-full px-6 py-4 mb-5 font-medium leading-none text-white transition rounded-full hover:opacity-60 duration-100 bg-black">
      {children}
    </button>
  );
};

export default Button;
