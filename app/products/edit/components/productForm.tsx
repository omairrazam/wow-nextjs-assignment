"use client"

import ImagePlaceholder from "@/app/components/image-placeholder";
import Input from "@/app/components/input";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useProducts } from "@/app/services/hooks/product/useProducts";
import { useRouter } from "next/navigation";

export interface Product {
  name: string;
  description: string;
  sku: string;
  price: string;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Product name is required"),
  description: Yup.string().required("Product description is required"),
  price: Yup.string().required("Product Price is required"),
  sku: Yup.string().required("Product sku is required"),
});

const ProductForm = ({product}: {product: Product}) => {

  const { editProduct, error, loading } = useProducts();
  const router = useRouter();

  async function onSubmitHandler (values: Product) {

    const isProductEdited = await editProduct(values);
    
    if (isProductEdited) {
      router.push("/products/listing")
    } else {
      console.log(`error: ${error}`); // ToDo: Error handling
    }
  };

  const formik = useFormik({
    initialValues: {
      name: product?.name || "",
      description: product?.description || "",
      price: product?.price || "",
      sku: product?.sku || ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => onSubmitHandler(values),
  });

  return (
    <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="lg:row-span-2 bg-white p-5 lg:p-7 border border-zinc-100 lg:rounded-xl">
            <h1 className="lg:text-lg font-semibold">Basic Information</h1>
            <p className="text-sm text-zinc-500">
              Includes product name and description
            </p>
            <div className="lg:p-4 lg:border lg:rounded-xl mt-5 lg:mt-8">
              <div className="flex flex-col items-start gap-1.5">
                <label htmlFor="name" className="text-sm">
                  Product name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formik.values.name}
                  placeholder="Enter product name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (<div className="bg-red-50 text-red-500 px-5 py-2 rounded-md text-xs mt-2">{formik.errors.name}</div>) : null}
              </div>
              <div className="flex flex-col items-start gap-1.5">
                <label htmlFor="sku" className="text-sm">
                  Product Sku
                </label>
                <Input
                  id="sku"
                  name="sku"
                  type="text"
                  value={formik.values.sku}
                  placeholder="Enter product sku"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  readOnly={true}
                />
                {formik.touched.sku && formik.errors.sku ? (<div className="bg-red-50 text-red-500 px-5 py-2 rounded-md text-xs mt-2">{formik.errors.sku}</div>) : null}
              </div>
              <div className="flex flex-col items-start gap-1.5 mt-4">
                <label htmlFor="description" className="text-sm">
                  Product description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter product description. etc Newer Model"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="flex items-center w-full px-5 py-4 mr-2 text-[13px] lg:text-sm font-medium outline-none focus:bg-zinc-100 placeholder:text-zinc-500 bg-zinc-50 rounded-lg"
                  cols={30}
                  rows={10}
                />
                {formik.touched.description && formik.errors.description ? (<div className="bg-red-50 text-red-500 px-5 py-2 rounded-md text-xs mt-2">{formik.errors.description}</div>) : null}
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-6 px-5 py-2.5 lg:py-3 rounded-lg bg-black text-white text-[13px] lg:text-sm hover:opacity-60"
            >
              Save Product
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
                <label htmlFor="price" className="text-sm">
                  Product price
                </label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  value={formik.values.price}
                  placeholder="Enter product price"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.price && formik.errors.price ? (<div className="bg-red-50 text-red-500 px-5 py-2 rounded-md text-xs mt-2">{formik.errors.price}</div>) : null}
              </div>
            </div>
          </div>
        </form>
  );
};

export default ProductForm;
