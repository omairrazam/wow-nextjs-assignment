import React from "react";

interface InputProps {
  placeholder: string;
  type: string;
}

const Input = ({ type, placeholder }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-200 placeholder:text-gray-700 bg-gray-100 rounded-lg"
    />
  );
};

export default Input;
