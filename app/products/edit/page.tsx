"use client"

import Button from "@/app/components/button";
import ImagePlaceholder from "@/app/components/image-placeholder";
import Input from "@/app/components/input";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useProducts } from "@/app/services/hooks/product/useProducts";
import ProductForm from "./components/productForm";
import { useProductsContext } from "@/app/services/hooks/product/useProductsContext";

export interface Product {
  name: string;
  description: string;
  sku: string;
  price: string;
}

const EditProduct = () => {

  const { getProduct, error, loading } = useProducts();
  const { product } = useProductsContext();
  const searchParams = new URLSearchParams(window.location.search);
  const sku = searchParams.get('sku') || "";

  useEffect(()=> {
    const fetchProduct = async(sku: string) => {
      getProduct(sku);
    }
    fetchProduct(sku);
  }, [sku])


  return (
    <div className="bg-zinc-50 min-h-screen w-full py-10 lg:py-16">
      {!!product && product.sku && <div className="max-w-7xl lg:mx-auto">
        <div className="mx-4 lg:mx-0 mb-4 lg:mb-6">
          <h1 className="lg:text-xl font-semibold">Add Product</h1>
          <p className="text-xs lg:hidden text-zinc-500">Add a product below</p>
          <p className="text-sm hidden lg:block text-zinc-500">
            Add a product by filling product info fields
          </p>
        </div>
        <ProductForm product={product}/>
      </div>}
      {!product && <div>Loading...</div>}
    </div>
  );
};

export default EditProduct;
