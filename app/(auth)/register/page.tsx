import * as React from "react";
import Link from "next/link";
import Checkbox from "@/app/components/checkbox-label";
import Button from "@/app/components/button";
import Input from "@/app/components/input";

const Page = () => {
  return (
    <div className="bg-gradient-to-br from-white via-black/5 to-white rounded-lg lg:py-5">
      <div className="container flex flex-col mx-auto bg-white lg:rounded-3xl lg:my-5">
        <Link href={"#"}>
          <h1 className="font-bold text-2xl text-black mt-8 ml-5 lg:ml-10 lg:mt-10 ">
            WOW
          </h1>
        </Link>
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-10 w-full max-w-lg mx-auto px-6 lg:px-0">
              <form className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                <h3 className="mb-3 text-2xl lg:text-3xl font-semibold text-dark-grey-900 mt-10 lg:mt-0">
                  Register
                </h3>
                <p className="mb-4 text-grey-700">
                  Fill in the form to register
                </p>
                <div className="flex flex-col items-start mb-5">
                  <label
                    htmlFor="email"
                    className="mb-1.5 text-sm text-start text-grey-900"
                  >
                    Email*
                  </label>
                  <Input type="text" placeholder="email@company.com" />
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="first_name"
                      className="mb-1.5 text-sm text-gray-900"
                    >
                      First Name
                    </label>
                    <Input type="text" placeholder="Enter first name" />
                  </div>
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="last_name"
                      className="mb-1.5 text-sm text-start text-gray-900"
                    >
                      Last Name
                    </label>
                    <Input type="text" placeholder="Enter last name" />
                  </div>
                </div>
                <div className="flex flex-col items-start mb-5">
                  <label
                    htmlFor="password"
                    className="mb-1.5 text-sm text-start text-gaey-900"
                  >
                    Password*
                  </label>
                  <Input type="password" placeholder="Enter a password" />
                </div>
                <div className="mb-8">
                  <Checkbox
                    defaultChecked
                    id="terms-&-conditions"
                    label="I accept the terms and conditions"
                  />
                </div>
                <Button>Register</Button>
                <p className="text-sm leading-relaxed text-gray-900">
                  Already have an account?{" "}
                  <Link href="/signin" className="font-bold text-gray-700">
                    Sign In
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
