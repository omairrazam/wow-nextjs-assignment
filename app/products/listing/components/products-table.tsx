"use client"

import React from "react";
import Checkbox from "@/app/components/checkbox";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: any;
  sku: string;
}

interface ProductsTableProps {
  productsData: Product[];
}

const ProductsTable = ({ productsData }: ProductsTableProps) => {
  return (
    <div>
      <table className="w-full overflow-x-auto table">
        <thead>
          <tr className="uppercase text-xs text-zinc-700 font-medium border-b border-zinc-100">
            <td className="w-16 justify-self-start p-5">
              <Checkbox id="selected_product_id" />
            </td>
            <td className="w-28 p-5">Product</td>
            <td className="w-96 p-5">Description</td>
            <td className="p-5">Name</td>
            <td className="p-5">Price</td>
            <td className="p-5">SKU</td>
            <td className="text-right p-5">Action</td>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product) => (
            <tr className="text-xs text-zinc-500/70 border-b border-zinc-100">
              <td className="p-5">
                <Checkbox id="selected_product_id" />
              </td>
              <td className="p-5">
                <div className="bg-zinc-50 rounded-2xl aspect-square w-20">
                  <Image
                    src={product.image}
                    alt="productImage"
                    className="aspect-square rounded-2xl"
                  />
                </div>
              </td>
              <td className="p-5 align-top text-[13px]">
                {product.description}
              </td>
              <td className="p-5 align-top text-black font-medium text-sm">
                {product.name}
              </td>
              <td className="p-5 align-top font-bold text-black text-base">
                {product.price ? `${product.price}`: "-"}
              </td>
              <td className="p-5 align-top text-black font-medium text-sm">
                {product.sku}
              </td>
              <td className="p-5 align-top text-right">
                <div className="flex items-center justify-end gap-3 font-medium">
                  <button className="bg-zinc-100 inline-flex items-center gap-2 justify-center text-zinc-700 rounded-full px-5 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                    Edit
                  </button>
                  <button className="bg-red-500 inline-flex gap-2 justify-center items-center text-white rounded-full px-5 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
