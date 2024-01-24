"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ProductsTable from "./products-table";
import ProductsGrid, { Product } from "./products-grid";
import { Pagination } from "@/app/components/pagination";
import { useProducts } from "@/app/services/hooks/product/useProducts";
import { useProductsContext } from "@/app/services/hooks/product/useProductsContext";
import { useAuthContext } from "@/app/services/hooks/auth/useAuthContext";

const ProductListing = () => {

  const { getProducts, loading, error } = useProducts();
  const { products } = useProductsContext();
  const { isAdmin } = useAuthContext();

  const [productListing, setProductListing] = useState<Product[]>(products);

  useEffect(() => {
    const fetchProducts = async () => {
      await getProducts();
    };
  
    fetchProducts();
  }, []);

  useEffect(()=> {
    setProductListing(products);
  }, [products])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="bg-zinc-50 w-full min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-4 lg:mx-auto">
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <div>
            <h1 className="text-lg lg:text-xl font-semibold">Products</h1>
            <p className="text-xs lg:hidden text-zinc-500">
              See all product listings below
            </p>
            <p className="text-sm hidden lg:block text-zinc-500">
              See all your product listings below
            </p>
          </div>
          {isAdmin() && <Link href="/admin/products/add-product" className="shrink-0">
            <button className="bg-white inline-flex gap-2 rounded-lg px-5 py-2.5 lg:py-3 lg:px-7 text-[13px] lg:text-sm hover:opacity-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 lg:w-5 lg:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Add Product
            </button>
          </Link>}
        </div>
        <div className="bg-white lg:rounded-xl hidden lg:block border border-zinc-100">
          {productListing && productListing.length > 0 ? <>
            <ProductsTable productsData={productListing} />
            <div className="flex justify-center items-center my-8">
              <Pagination noOfPages={[1, 2, 3, 4, 5]} />
            </div>
          </> : <div>No Products found</div>}
        </div>
        <div className="lg:hidden">
          <ProductsGrid productsData={productListing} />
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
