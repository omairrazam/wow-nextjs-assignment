import Button from "@/app/components/button";
import ImagePlaceholder from "@/app/components/image-placeholder";
import Input from "@/app/components/input";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

interface CreateProductValues {
  productName: string;
  productDescription: string;
  productPrice: string;
}

const validationSchema = yup.object({
  productName: yup.string().required("Product name is required"),
  productDescription: yup.string().required("Product description is required"),
  productPrice: yup.string().required("Product $Price is required"),
});

const Page = () => {
  const onSubmitHandler = (values: CreateProductValues) => {
    alert(
      `Product Name: ${values.productName} , Product Description: ${values.productDescription}, Product Price: ${values.productPrice}`
    );
  };
  const formik = useFormik({
    initialValues: {
      productName: "",
      productDescription: "",
      productPrice: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => onSubmitHandler(values),
  });
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
                  name="productName"
                  type="text"
                  value={formik.values.productName}
                  placeholder="Enter product name. etc Tea Cup"
                  onChange={formik.handleChange}
                  error={
                    formik.touched.productName &&
                    Boolean(formik.errors.productName)
                  }
                  helperText={
                    formik.touched.productName && formik.errors.productName
                  }
                />
              </div>
              <div className="flex flex-col items-start gap-1.5 mt-4">
                <label htmlFor="product_name" className="text-sm">
                  Product description
                </label>
                <textarea
                  name="productDescription"
                  placeholder="Enter product description. etc Newer Model"
                  value={formik.values.productName}
                  onChange={formik.handleChange}
                  className="flex items-center w-full px-5 py-4 mr-2 text-[13px] lg:text-sm font-medium outline-none focus:bg-zinc-100 placeholder:text-zinc-500 bg-zinc-50 rounded-lg"
                  cols={30}
                  rows={10}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-6 px-5 py-2.5 lg:py-3 rounded-lg bg-black text-white text-[13px] lg:text-sm hover:opacity-60"
            >
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
                  name="productPrice"
                  type="number"
                  value={formik.values.productPrice}
                  placeholder="Enter product name. etc Tea Cup"
                  onChange={formik.handleChange}
                  error={
                    formik.touched.productPrice &&
                    Boolean(formik.errors.productPrice)
                  }
                  helperText={
                    formik.touched.productPrice && formik.errors.productPrice
                  }
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
