"use client"

import axios from 'axios';
import { BASE_URL } from '../config';

export interface SignInResponse {
  token: any;
}

export interface UserProfileResponse {
  user: any;
}

export const signIn = async (username: string, password: string): Promise<SignInResponse> => {
  try {
    const response = await axios.post<SignInResponse>(`${BASE_URL}/auth/login`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

export const getUserProfile = async (): Promise<UserProfileResponse> => {
  try {
    const response = await axios.get<UserProfileResponse>(`${BASE_URL}/auth/profile`);

    return response.data;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};
