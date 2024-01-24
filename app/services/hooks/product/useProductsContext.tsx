"use client"

import { useContext } from "react";
import { ProductsContext } from "../../context/products/productsContext";

export function useProductsContext() {
    return useContext(ProductsContext);
}
