"use client"

import { useEffect, useState } from 'react';
import { apis } from '../../api';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const productsData = await apis.product.fetchProducts();
        setProducts(productsData);
        setLoading(false);
      } catch (error:any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProductsData();
  }, []);

  return { products, loading, error };
};
