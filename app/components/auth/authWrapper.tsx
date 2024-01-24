"use client"

import Page from '@/app/(auth)/signin/page';
import { useAuth } from '@/app/services/hooks/auth/useAuth';
import { useAuthContext } from '@/app/services/hooks/auth/useAuthContext';
import { useRouter } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react';

const AuthWrapper = ({ children }: {children: ReactNode}) => {

  const router = useRouter();
  const { isAuthenticated, user, isAdmin } = useAuthContext();
  const { fetchAccount } = useAuth();
  const [isUserAuthorized, setIsUserAuthorized] = useState<boolean>(false);

  const isSignInOrRegisterRoute = window.location.href.includes("signin") || window.location.href.includes("register");

  const handleAuthorization = () => {
    const isCurrentRouteAdmin = window.location.href.includes("admin");
    const isCurrentUserAdmin: boolean = isAdmin();

    if (isCurrentUserAdmin) {
      setIsUserAuthorized(true);
    } else {
      isCurrentRouteAdmin ? setIsUserAuthorized(false) : setIsUserAuthorized(true);
    }
  }

  useEffect(()=> {
    if(isAuthenticated() && !user) {
      fetchAccount();
    }
    handleAuthorization();
  }, [])

  if (!isAuthenticated() && !isSignInOrRegisterRoute) {
    router.push('/signin');
    return <Page />
  }

  if (!isUserAuthorized) {
    return <div className="bg-red-50 text-red-500 px-5 py-2 rounded-md text-xs mt-2">You are not authorized to access this page</div>
  } else {
    return <>{children}</>;
  }
};

export default AuthWrapper;
