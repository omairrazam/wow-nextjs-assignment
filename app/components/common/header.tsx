"use client"

import Link from "next/link";
import { useAuthContext } from "@/app/services/hooks/auth/useAuthContext";
import Button from "../button";
import { useAuth } from "@/app/services/hooks/auth/useAuth";
import { useRouter } from "next/navigation";

export default function Header() {

  const { isAuthenticated } = useAuthContext();
  const { doLogout } = useAuth();
  const router = useRouter();
  
  const handleLogout = () => {
    doLogout();
    router.push("/signin")
  }
 
  return (
    <div className="flex justify-between items-center py-3 px-8 lg:px-10 xl:px-16">
        <Link href={"/"}>
            <div className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-300 to-black">
              WOW
            </div>
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium">
          {!isAuthenticated() && <>
            <Link
              href={"/signin"}
              className="bg-gray-100 text-gray-700 rounded-full px-7 py-2.5 lg:py-3 hover:opacity-60 duration-100"
            >
              Sign In
            </Link>
            <Link
              href={"/register"}
              className="bg-black text-white rounded-full px-7 py-2.5 lg:py-3 hover:opacity-60 duration-100"
            >
              Register
            </Link>
          </>}  
          {isAuthenticated() && <Button onClick={handleLogout} >Logout</Button>}
        </div>
    </div>
  );
}
