"use client"

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: any;
  sku: string;
}

type productContextType = {
    products: any;
    setProducts:any;
    product: any;
    setProduct: any;
};

const productContextDefaultValues: productContextType = {
    products: [],
    setProducts: () => null,
    product: null,
    setProduct: () => null
};

export const ProductsContext = createContext<productContextType>(productContextDefaultValues);

type Props = {
    children: ReactNode;
};

export function ProductContextProvider({ children }: Props) {
    const [products, setProducts] = useState<Product[]>([]);
    const [product, setProduct] = useState<Product | null >(null);

    const value = {
        products,
        setProducts,
        product,
        setProduct,
    };
    
    return (
        <>
            <ProductsContext.Provider value={value}>
                {children}
            </ProductsContext.Provider>
        </>
    );
}
