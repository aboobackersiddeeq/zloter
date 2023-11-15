"use client";
import { getProviders, signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const Login = () => {
  const providers = ["google", "github", "twitter", "email"];
  const [provider, setProvider]: any = useState([]);
  const { data: session } = useSession();
  const auth =  session;

  useEffect(() => {
    if (auth?.user) {
      return redirect("/");
    }
  }, []);
  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      if (
        response &&
        typeof response === "object" &&
        !Array.isArray(response)
      ) {
        const values = Object.values(response);
        setProvider(values);
      } else {
        // Handle the case where the response is not in the expected format
        console.error("Invalid response format:", response);
      }
    };
    setProviders();
  }, []);
  return (
    <div className="flex justify-center items-center min-h-screen pt-3 ">
      <div className="  md:w-96 p-2">
        <h1 className=" pt-4  text-xl font-extrabold text-center">
          <span className="bg-red-600 text-white p-0.5 ">ZLO</span>TER
        </h1>
        <h1 className=" text-center text-2xl font-light py-4">Join Zloter. </h1>
        <div className="space-y-3 pt-8">
          {providers.map((value, i) => {
            return (
              <div
                key={value}
                onClick={() => signIn(value)}
                className="p-3 flex border rounded-xl  cursor-pointer"
              >
                <img src={`/assets/icons/${value}.svg`} alt="" />
                <span className="flex justify-center w-full ">
                  Sign up with {value[0].toUpperCase() + value.slice(1)}
                </span>
              </div>
            );
          })}
          
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
