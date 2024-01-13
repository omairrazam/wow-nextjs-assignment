import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import GoogleLogo from "@/app/assets/images/google-logo.png";
import Checkbox from "@/app/components/checkbox";
import Button from "@/app/components/button";
import Input from "@/app/components/input";

const Page = () => {
  return (
    <div className="bg-gradient-to-br from-white via-black/5 to-white rounded-lg lg:py-5">
      <div className="container flex flex-col mx-auto bg-white lg:rounded-3xl lg:my-5">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-10 w-full max-w-lg mx-auto px-6 lg:px-0">
              <form className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                <h3 className="mb-3 text-2xl lg:text-3xl font-semibold text-dark-grey-900 mt-10 lg:mt-0">
                  Sign In
                </h3>
                <p className="mb-4 text-grey-700">
                  Enter your email and password
                </p>
                <div className="mt-6 lg:mt-8">
                  <Link
                    href="#"
                    className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-lg text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300"
                  >
                    <Image
                      className="w-5 aspect-square mr-2"
                      src={GoogleLogo}
                      alt="google-logo"
                    />
                    Sign in with Google
                  </Link>
                </div>
                <div className="flex items-center mb-3">
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                  <p className="mx-4 text-grey-600">or</p>
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                </div>
                <div className="mb-5 flex flex-col items-start">
                  <label htmlFor="email" className="mb-2 text-sm text-grey-900">
                    Email*
                  </label>
                  <Input type="text" placeholder="email@company.com" />
                </div>
                <div className="mb-5 flex flex-col items-start">
                  <label
                    htmlFor="password"
                    className="mb-2 text-sm text-grey-900"
                  >
                    Password*
                  </label>
                  <Input type="password" placeholder="Enter a password" />
                </div>
                <div className="flex flex-row justify-between mb-8">
                  <Checkbox
                    defaultChecked
                    id="forgot-password"
                    label="Keep me logged in"
                  />
                  <Link
                    href="#"
                    className="text-sm font-medium text-black shrink-0"
                  >
                    Forget password?
                  </Link>
                </div>
                <Button>Sign In</Button>
                <p className="flex items-center gap-1.5 justify-center text-sm leading-relaxed text-gray-900">
                  <span>Not registered yet? </span>
                  <Link href="/register" className="font-bold text-gray-700">
                    Create an Account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
