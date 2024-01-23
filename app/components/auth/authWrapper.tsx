"use client"

import Page from '@/app/(auth)/signin/page';
import { useAuth } from '@/app/services/hooks/auth/useAuth';
import { useAuthContext } from '@/app/services/hooks/auth/useAuthContext';
import { useRouter } from 'next/navigation';
import React, { ReactNode, useEffect } from 'react';

const AuthWrapper = ({ children }: {children: ReactNode}) => {

  const router = useRouter();
  const { isAuthenticated, user } = useAuthContext();
  const { fetchAccount } = useAuth();

  const isSignInOrRegisterRoute = window.location.href.includes("signin") || window.location.href.includes("register");


  useEffect(()=> {
    if(isAuthenticated() && !user) {
      fetchAccount();
    }
  }, [])

  if (!isAuthenticated() && !isSignInOrRegisterRoute) {
    router.push('/signin');
    return <Page />
  }

  return <>{children}</>;
};

export default AuthWrapper;
