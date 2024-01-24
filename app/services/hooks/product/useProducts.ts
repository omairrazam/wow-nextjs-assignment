"use client"

import { useState } from 'react';
import { apis } from '../../api';
import { Product } from '@/app/products/edit/page';
import { useProductsContext } from './useProductsContext';

export function useProducts() {

  const [productState, setProductState] = useState({
    error: null,
    loading: false,
    products: [],
  });

  const { products, product, setProducts, setProduct } = useProductsContext();

  const getProducts: any = async () => {
    let result: any;
    setProductState({...productState, loading: true})
    try{
      result = await apis.product.fetchProducts();
      setProducts(result);
      setProductState({...productState, error: null, loading: false})
    }catch(error: any) {
      setProductState({...productState, error: error, loading: false})
      setProducts([]);
    }
  }

  const getProduct: any = async (sku: string) => {
    let result: Product | undefined;
    setProductState({...productState, loading: true})
    try{
      result = await apis.product.fetchProduct(sku);
      setProduct(result);
      setProductState({...productState, error: null, loading: false})
    }catch(error: any) {
      setProductState({...productState, error: error, loading: false})
      setProduct(undefined);
    }
  }

  async function createProduct(product: any) {
    setProductState({...productState, loading: true})
    let response: any;
    try {
      response = await apis.product.createProduct(product);
      setProductState({...productState, error: null, loading: false})
      return true;
    } catch(error: any) {
      setProductState({...productState, error: error, loading: false})
      return false;
    }
  }

  async function editProduct(product: any) {
    setProductState({...productState, loading: true})
    let response: any;
    try {
      response = await apis.product.editProduct(product);
      setProductState({...productState, error: null, loading: false})
      return true;
    } catch(error: any) {
      setProductState({...productState, error: error, loading: false})
      return false;
    }
  }

  const deleteProduct: any = async (sku: string) => {
    let result: Product | undefined;
    setProductState({...productState, loading: true});
    try{
      result = await apis.product.deleteProduct(sku);
      const newProducts = products.filter((p:Product)=> p.sku !== sku);
      setProducts([...newProducts]);
      setProductState({...productState, error: null, loading: false});
      return true;
    }catch(error: any) {
      setProductState({...productState, error: error, loading: false});
      return false;
    }
  }

  return { getProducts, createProduct, getProduct, editProduct, deleteProduct, products: productState.products, product: product, error: productState.loading, loading: productState.loading }
}
