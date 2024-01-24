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

export const fetchProduct = async (sku: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${sku}`);
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

export const editProduct = async (product: any) => {
  try {
    const response = await axios.patch<any>(`${BASE_URL}/products/${product.sku}`, {...product});
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

export const deleteProduct = async (sku: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/products/${sku}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
