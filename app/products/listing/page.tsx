import React from "react";
import Link from "next/link";
import Product1Image from "@/app/assets/images/products/1.png";
import Product2Image from "@/app/assets/images/products/2.png";
import Product3Image from "@/app/assets/images/products/3.png";
import Product4Image from "@/app/assets/images/products/4.png";
import Product5Image from "@/app/assets/images/products/5.png";
import Product6Image from "@/app/assets/images/products/6.png";
import Product7Image from "@/app/assets/images/products/7.png";
import ProductsTable from "./components/products-table";
import ProductsGrid from "./components/products-grid";
import { Pagination } from "@/app/components/pagination";

const Page = () => {
  const products = [
    {
      id: 1,
      name: "Apple Watch",
      description:
        "Apple Watch series 8 ultra, wireless charging, blood pressure test, Weather monitor + tracking accessibility",
      price: 799.99,
      image: Product1Image,
    },
    {
      id: 2,
      name: "Smartphone X",
      description:
        "Flagship smartphone with advanced features and high-resolution camera.",
      price: 999.99,
      image: Product2Image,
    },
    {
      id: 3,
      name: "Laptop Pro",
      description:
        "Powerful laptop with fast processors, high-resolution display, and long battery life.",
      price: 1499.99,
      image: Product3Image,
    },
    {
      id: 4,
      name: "Wireless Earbuds",
      description:
        "Premium wireless earbuds with noise cancellation and long-lasting battery.",
      price: 199.99,
      image: Product4Image,
    },
    {
      id: 5,
      name: "Fitness Tracker",
      description:
        "Fitness tracker with heart rate monitoring, step counting, and sleep tracking.",
      price: 79.99,
      image: Product5Image,
    },
    {
      id: 6,
      name: "Smart Home Hub",
      description:
        "Central hub for smart home devices, enabling seamless automation and control.",
      price: 249.99,
      image: Product6Image,
    },
    {
      id: 7,
      name: "Camera Kit",
      description:
        "Professional camera kit with high-resolution camera, lenses, and accessories.",
      price: 1499.99,
      image: Product7Image,
    },
  ];
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
          <Link href="/products/add-product" className="shrink-0">
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
          </Link>
        </div>
        <div className="bg-white lg:rounded-xl hidden lg:block border border-zinc-100">
          <ProductsTable productsData={products} />
          <div className="flex justify-center items-center my-8">
            <Pagination noOfPages={[1, 2, 3, 4, 5]} />
          </div>
        </div>
        <div className="lg:hidden">
          <ProductsGrid productsData={products} />
        </div>
      </div>
    </div>
  );
};

export default Page;
