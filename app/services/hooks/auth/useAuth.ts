"use client"

import { useState } from 'react';
import { apis } from '../../api';
import { useAuthContext } from './useAuthContext';

export function useAuth() {
  const { login, logout, setUserProfile } = useAuthContext()
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const fetchAccount: any = async () => {
    let result: any;
    try{
      result = await apis.auth.getUserProfile();
      setError(null)
      setUserProfile(result)
      setLoading(false);
      return true;
    }catch(error) {
      setError(error)
      setUserProfile(null)
      logout();
      setLoading(false);
      return false;
    }
  }

  async function doLogin(username: string, password: string) {
    setLoading(true)
    let response: any;
    try {
      response = await apis.auth.signIn(username, password);
    } catch(error) {
      setError(error);
      setLoading(false);
      return false;
    }

    const token = response?.access_token

    if (token) {
      login(token);
      let isAccountFetched: boolean;
      isAccountFetched = await fetchAccount();
      return isAccountFetched;
    } else {
      setLoading(false);
      return false
    }
  }

  function doLogout() {
    logout();
  }

  async function register(username: string, password: string) {
    setLoading(true)
    let response: any;
    try {
      response = await apis.auth.register(username, password);
    } catch(error) {
      setError(error);
      setLoading(false);
      return false;
    }

    const user = response;

    if (user) {
      return await doLogin(user.username, user.password);
    } else {
      setLoading(false);
      return false
    }
  }

  return { doLogin, doLogout, fetchAccount, register, error, loading }
}
