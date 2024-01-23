"use client"

import { useState } from 'react';
import { apis } from '../../api';

export function useProducts() {
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [productState, setProductState] = useState({
    error: null,
    loading: false,
    products: []
  });

  const getProducts: any = async () => {
    let result: any;
    setProductState({...productState, loading: true})
    try{
      result = await apis.product.fetchProducts();
      setProductState({...productState, error: null, loading: false, products: result})
    }catch(error: any) {
      setProductState({...productState, error: error, loading: false, products: []})
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

  return { getProducts, createProduct, products: productState.products, error: productState.loading, loading: productState.loading }
}
