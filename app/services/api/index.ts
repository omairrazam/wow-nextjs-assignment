"use client"

import * as productApis from './productsApis';
import * as authApis from './authApis';
import axios from 'axios';

const getToken = () => {
  return window.localStorage.getItem('token');
}

axios.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apis = {
  product: productApis,
  auth: authApis
};
