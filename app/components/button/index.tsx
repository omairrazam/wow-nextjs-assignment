"use client"

import React from "react";

interface ButtonProps {
  children: string;
  type?: "submit" | "reset" | "button";
  onClick?: (event: any) => void;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled, type }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} type={type} className="w-full px-6 py-4 mb-5 font-medium leading-none text-white transition rounded-full hover:opacity-60 duration-100 bg-black">
      {children}
    </button>
  );
};

export default Button;
