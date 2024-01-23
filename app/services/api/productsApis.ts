"use client"

import axios from 'axios';
import { BASE_URL } from '../config';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const createProduct = async (product: any) => {
  try {
    const response = await axios.post<any>(`${BASE_URL}/products`, {...product});
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};
