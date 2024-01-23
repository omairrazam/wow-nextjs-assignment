import * as React from "react";
import Link from "next/link";
import Button from "@/app/components/button";
import Input from "@/app/components/input";
import { useFormik } from "formik";
import * as yup from "yup";

interface LoginFormValues {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup.string().required("Please enter email"),
  password: yup.string().required("Please enter your password"),
});

const Page = () => {
  const onSubmitHandler = (values: LoginFormValues) => {
    alert(`Email: ${values.email}, Password: ${values.password}`);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
              <form className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                <h3 className="mb-3 text-2xl lg:text-3xl font-semibold text-dark-grey-900 mt-10 lg:mt-0">
                  Sign In
                </h3>
                <p className="mb-4 text-grey-700">
                  Enter your email and password
                </p>
                <div className="flex flex-col items-start mb-5">
                  <label
                    htmlFor="email"
                    className="mb-1.5 text-sm text-start text-grey-900"
                  >
                    Email*
                  </label>
                  <Input
                    name="email"
                    value={formik.values.email}
                    type="email"
                    onChange={formik.handleChange}
                    placeholder="email@company.com"
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </div>
                <div className="flex flex-col items-start mb-5">
                  <label
                    htmlFor="password"
                    className="mb-1.5 text-sm text-start text-gaey-900"
                  >
                    Password*
                  </label>
                  <Input
                    name="password"
                    value={formik.values.password}
                    type="password"
                    onChange={formik.handleChange}
                    placeholder="Enter your password"
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </div>
                <Button type="submit">Login</Button>
                <p className="text-sm leading-relaxed text-gray-900">
                  Don't have an account?{" "}
                  <Link href="/signin" className="font-bold text-gray-700">
                    Create Account
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
