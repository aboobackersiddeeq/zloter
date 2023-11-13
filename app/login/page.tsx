"use client"
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Login = () => {
  const { data: session } = useSession();
  const auth =  session;

  useEffect(() => {
    if (!auth) {
      return redirect("/");
    }
  }, []);
  return (
    <div className="max-w-full ">
      <div className="  flex  justify-center items-center min-h-screen pt-3  ">
        <div className="  md:w-96 p-2  ">
          <h1 className=" pt-4  text-xl font-extrabold text-center">
            <span className="bg-red-600 text-white p-0.5 ">ZLO</span>TER
          </h1>
          <h1 className=" text-center text-2xl font-light py-4  ">
            Welcome Back
          </h1>
          <div className="space-y-3 pt-8  ">
            <div className="p-3 flex border rounded-xl ">
              <img src="/assets/icons/google.svg" alt="" />
              <span className=" w-full flex justify-center">
                Continue with Google
              </span>
            </div>

            <div className="flex p-3 border  rounded-xl ">
              <img src="/assets/icons/github.svg" alt="" />
              <span className="w-full flex justify-center">
                Continue with GitHub
              </span>
            </div>
            <div className="flex p-3 border rounded-xl">
              <img src="/assets/icons/twitter.svg" alt="" />
              <p className="w-full flex justify-center">
                {" "}
                Continue with Twitter
              </p>
            </div>
          </div>
          <div className="relative  py-4 mt-4">
            <hr />
            <div className=" absolute top-1/2 left-1/2 px-2 bg-white transform -translate-x-1/2 -translate-y-1/2">
              OR
            </div>
          </div>
          <form action="" method="POST" className=" flex flex-col gap-2">
            <label>Email</label>
            <input
              className=" border p-2 rounded-lg text-sm"
              type="email"
              placeholder="Email Address"
              name="email"
              required
            />
            <label>Password</label>
            <input
              className=" border p-2 rounded-lg text-sm "
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <p className="text-end text-blue-500 text-sm">Forgot password?</p>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-1 rounded-md hover
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
            >
              Sign in
            </button>
          </form>
          <p className="italic text-xs py-3">
            By signing in, you are agreeing to our{" "}
            <span className="text-blue-500">privacy policy </span>and
            <span className="text-blue-500"> terms of use.</span>
          </p>
          <hr />
          <p className="text-center py-4">
            No account? <span className="text-blue-500">Create One</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
