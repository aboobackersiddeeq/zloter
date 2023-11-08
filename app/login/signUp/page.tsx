"use client";
import { getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

const Login = () => {
  const [provider, setProvider]: any = useState({});
  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProvider(response);
    };
    setProviders();
  }, []);
  console.log(provider)
  return (
    <div className="flex justify-center items-center min-h-screen pt-3 ">
      <div className="  md:w-96 p-2">
        <h1 className=" pt-4  text-xl font-extrabold text-center">
          <span className="bg-red-600 text-white p-0.5 ">ZLO</span>TER
        </h1>
        <h1 className=" text-center text-2xl font-light py-4">Join Zloter. </h1>
        <div className="space-y-3 pt-8">
          <div className="p-3 flex border rounded-xl ">
            <img src="/assets/icons/google.svg" alt="" />
            <span className="flex justify-center w-full ">
              Sign up with Google
            </span>
          </div>

          <div className="flex p-3 border  rounded-xl ">
            <img src="/assets/icons/github.svg" alt="" />
            <span className="w-full flex justify-center">
              Sign up with GitHub
            </span>
          </div>

          <div className="flex p-3 border rounded-xl">
            <img src="/assets/icons/twitter.svg" alt="" />
            <p className="w-full flex justify-center"> Sign up with Twitter</p>
          </div>
          <div className="flex p-3 border rounded-xl">
            <img src="/assets/icons/email.svg" alt="" />
            <p className="w-full flex justify-center"> Sign up with Email</p>
          </div>
        </div>

        <p className="italic text-xs py-3">
          By signing in, you are agreeing to our{" "}
          <span className="text-blue-500">privacy policy </span>and
          <span className="text-blue-500"> terms of use.</span>
        </p>
        <hr />
        <p className="text-center py-4">
          Already have an account? <span className="text-blue-500">Log in</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
