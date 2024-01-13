import React from "react";
import Navbar from "@/app/shared/navbar";

const layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default layout;
