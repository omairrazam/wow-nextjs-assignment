import Button from "@/app/components/button";
import ImagePlaceholder from "@/app/components/image-placeholder";
import Input from "@/app/components/input";
import React from "react";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="lg:row-span-2 bg-white p-5 lg:p-7 border border-zinc-100 lg:rounded-xl">
            <h1 className="lg:text-lg font-semibold">Basic Information</h1>
            <p className="text-sm text-zinc-500">
              Includes product name and description
            </p>
            <div className="lg:p-4 lg:border lg:rounded-xl mt-5 lg:mt-8">
              <div className="flex flex-col items-start gap-1.5">
                <label htmlFor="product_name" className="text-sm">
                  Product name
                </label>
                <Input
                  type="text"
                  placeholder="Enter product name. etc Tea Cup"
                />
              </div>
              <div className="flex flex-col items-start gap-1.5 mt-4">
                <label htmlFor="product_name" className="text-sm">
                  Product description
                </label>
                <textarea
                  placeholder="Enter product description. etc Newer Model"
                  className="flex items-center w-full px-5 py-4 mr-2 text-[13px] lg:text-sm font-medium outline-none focus:bg-zinc-100 placeholder:text-zinc-500 bg-zinc-50 rounded-lg"
                  id=""
                  cols={30}
                  rows={10}
                />
              </div>
            </div>
            <button className="w-full mt-6 px-5 py-2.5 lg:py-3 rounded-lg bg-black text-white text-[13px] lg:text-sm hover:opacity-60">
              Save Info
            </button>
          </div>
          <div className="bg-white p-5 lg:p-7 border border-zinc-100 lg:rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="lg:text-lg font-semibold">Product Images</h1>
                <p className="text-sm text-zinc-500">
                  You can add upto 3 images
                </p>
              </div>
              <button className="px-5 py-2.5 rounded-lg bg-black text-white text-[13px] lg:text-sm hover:opacity-60">
                Add Image
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-5 lg:mt-8">
              <ImagePlaceholder />
              <ImagePlaceholder />
              <ImagePlaceholder />
            </div>
          </div>
          <div className="bg-white p-5 lg:p-7 border border-zinc-100 lg:rounded-xl">
            <h1 className="lg:text-lg font-semibold">Price</h1>
            <p className="text-sm text-zinc-500">
              Add your product price below
            </p>
            <div className="lg:p-4 lg:border lg:rounded-xl mt-5 lg:mt-8">
              <div className="flex flex-col items-start gap-1.5">
                <label htmlFor="product_name" className="text-sm">
                  Product price
                </label>
                <Input
                  type="number"
                  placeholder="Enter product price. etc $699"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
