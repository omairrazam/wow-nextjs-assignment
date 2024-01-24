import React from "react";
import Image from "next/image";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: any;
  sku: string;
}

interface ProductsGridProps {
  productsData: Product[];
}

const ProductsGrid = ({ productsData }: ProductsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {productsData.map((product) => (
        <div key={product.sku} className="bg-white p-5 rounded-2xl flex flex-col gap-4">
          <div className="flex items-start gap-2 flex-1">
            <Image
              src={product.image}
              alt="productImage_id"
              className="w-16 aspect-square"
            />
            <div>
              <h1 className="text-semibold text-sm">{product.name}</h1>
              <p className="text-xs mb-2 mt-1 text-zinc-500">
                {product.description}
              </p>
              <p className="text-lg font-bold">${product.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 -mb-1">
            <button className="w-full bg-zinc-100 text-zinc-700 rounded-md flex justify-center items-center py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
            <button className="w-full bg-red-500 text-white rounded-md flex justify-center items-center py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
