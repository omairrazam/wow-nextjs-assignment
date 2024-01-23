"use client"

import { ReactNode, createContext, useContext, useState } from "react";

type authContextType = {
    user: any;
    setUserProfile: (user: any) => void;
    login: (token: string) => void;
    logout: () => void;
    isAuthenticated: () => boolean;
};

const authContextDefaultValues: authContextType = {
    user: null,
    setUserProfile: (user: any) => null,
    login: (token: string) => {},
    logout: () => {},
    isAuthenticated: () => false
};

export const AuthContext = createContext<authContextType>(authContextDefaultValues);

type Props = {
    children: ReactNode;
};

export function AuthContextProvider({ children }: Props) {
    const [user, setUser] = useState<any>(null);

    const login = (token: string) => {
        window.localStorage.setItem('token', token);
    };

    const logout = () => {
        window.localStorage.removeItem('token');
    };

    const isAuthenticated = () => {
        return !!window.localStorage.getItem('token')
    };

    const setUserProfile = (user: any) => {
        setUser(user);
    }

    const value = {
        user,
        login,
        logout,
        isAuthenticated,
        setUserProfile
    };
    
    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
