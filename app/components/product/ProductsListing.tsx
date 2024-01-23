"use client"

import React from 'react';
import { useProducts } from '../../services/hooks/product/useProducts';

const ProductsListing: React.FC = () => {
  
  const { products, loading, error } = useProducts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <div>
      <h2>Products:</h2>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsListing;
