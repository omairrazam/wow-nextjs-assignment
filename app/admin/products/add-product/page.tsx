"use client"

import React from "react";
import ProductForm from "@/app/components/products/productForm";

const Page = () => {

  return (
    <div className="bg-zinc-50 min-h-screen w-full py-10 lg:py-16">
      <div className="max-w-7xl lg:mx-auto">
        <div className="mx-4 lg:mx-0 mb-4 lg:mb-6">
          <h1 className="lg:text-xl font-semibold">Add Product</h1>
          <p className="text-xs lg:hidden text-zinc-500">Add a product below</p>
          <p className="text-sm hidden lg:block text-zinc-500">
            Add a product by filling product info fields
          </p>
        </div>
        <ProductForm product={null}/>
      </div>
    </div>
  );
};

export default Page;
