"use client"

import React from "react";

interface InputProps {
  placeholder: string;
  type: string;
  id?: string;
  value?: string;
  error?: any;
  helperText?: any;
  name?: string;
  onChange?: any;
}

const Input = ({ type, placeholder, onChange }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="flex items-center w-full px-5 py-4 mr-2 text-[13px] lg:text-sm font-medium outline-none focus:bg-zinc-100 placeholder:text-zinc-500 bg-zinc-50 rounded-lg"
      onChange={onChange}
    />
  );
};

export default Input;
