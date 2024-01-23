"use client"

import React from "react";
import Link from "next/link";
import { useAuthContext } from "@/app/services/hooks/auth/useAuthContext";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/services/hooks/auth/useAuth";

const Navbar = () => {

  const { isAuthenticated } = useAuthContext();
  const { doLogout } = useAuth();
  const router = useRouter();
  
  const handleLogout = () => {
    doLogout();
    router.push("/signin")
  }

  return (
    <div className="sticky top-0 bg-white border-b border-zinc-100 z-50 flex justify-between items-center py-3 px-8 lg:px-10 xl:px-16">
      <Link href={"/products/listing"}>
        <div className="font-bold text-2xl text-black">WOW</div>
      </Link>
      <div className="flex items-center gap-4 lg:gap-8 text-sm font-medium">
        <Link href={"/products/listing"} className="text-zinc-500 text-sm">
          Products
        </Link>
        <Link href={"/products/add-product"} className="text-zinc-500 text-sm">
          Add Product
        </Link>
        {isAuthenticated() && <button className="text-zinc-500 text-sm" onClick={handleLogout} >Logout</button>}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-8 h-8 lg:w-10 lg:h-10 text-zinc-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
