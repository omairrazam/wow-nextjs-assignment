"use client"

import * as React from "react";
import Link from "next/link";
import Checkbox from "@/app/components/checkbox-label";
import Button from "@/app/components/button";
import Input from "@/app/components/input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "@/app/services/hooks/auth/useAuth";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/app/services/hooks/auth/useAuthContext";

interface SignUpFormValues {
  username: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object({
  username: Yup.string()
    .min(4, 'Must be at least 4 characters')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Must be atleast 8 characters')
    .required('Required'),
  confirmPassword: Yup.string()
    .min(8, 'Must be atleast 8 characters')
    .required('Required')
    .oneOf([Yup.ref('password'), ""], 'Passwords must match')
});

const Page = () => {

  const { register, error, loading } = useAuth();
  const router = useRouter();
  const { isAdmin } = useAuthContext();

  async function onSubmitHandler (values: SignUpFormValues) {

    const isRegistered = await register(values.username, values.password);

    if (isRegistered) {
      const productsListingRoute = isAdmin() ? "/admin/products/listing" : "/products/listing"
      router.push(productsListingRoute)
    } else {
      console.log(`error: ${error}`); // ToDo: Error handling
    }
  };
  
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => onSubmitHandler(values),
  });
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
              <form onSubmit={formik.handleSubmit} className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                <h3 className="mb-3 text-2xl lg:text-3xl font-semibold text-dark-grey-900 mt-10 lg:mt-0">
                  Register
                </h3>
                <p className="mb-4 text-grey-700">
                  Fill in the form to register
                </p>
                <div className="flex flex-col items-start mb-5">
                  <label
                    htmlFor="username"
                    className="mb-1.5 text-sm text-start text-grey-900"
                  >
                    Username*
                  </label>
                  <Input
                    id="username"
                    name="username"
                    value={formik.values.username}
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="john"
                  />
                  {formik.touched.username && formik.errors.username ? (<div className="bg-red-50 text-red-500 px-5 py-2 rounded-md text-xs mt-2">{formik.errors.username}</div>) : null}
                </div>
                <div className="flex flex-col items-start mb-5">
                  <label
                    htmlFor="password"
                    className="mb-1.5 text-sm text-start text-gaey-900"
                  >
                    Password*
                  </label>
                  <Input
                    id="password"
                    name="password"
                    value={formik.values.password}
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your password"
                  />
                  {formik.touched.password && formik.errors.password ? (<div className="bg-red-50 text-red-500 px-5 py-2 rounded-md text-xs mt-2">{formik.errors.password}</div>) : null}
                </div>
                <div className="flex flex-col items-start mb-5">
                  <label
                    htmlFor="confirmPassword"
                    className="mb-1.5 text-sm text-start text-gaey-900"
                  >
                    Confirm Password*
                  </label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Re-Enter your password"
                  />
                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<div className="bg-red-50 text-red-500 px-5 py-2 rounded-md text-xs mt-2">{formik.errors.confirmPassword}</div>) : null}
                </div>
                <div className="mb-8">
                  <Checkbox
                    defaultChecked
                    id="terms-&-conditions"
                    label="I accept the terms and conditions"
                  />
                </div>
                <Button type="submit">Register</Button>
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
