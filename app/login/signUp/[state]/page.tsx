"use client";
const Login = ({ params }: { params?: Object }) => {
  return (
    <div className="flex justify-center items-center h-screen min-h-screen pt-3">
      <div className="  md:w-96 p-2">
        <h1 className=" pt-4  text-xl font-extrabold text-center">
          <span className="bg-red-600 text-white p-0.5 ">ZLO</span>TER
        </h1>
        <h1 className=" text-center text-2xl font-light py-4">
          Sign in with email{" "}
        </h1>
        <p className="text-center">
          Enter the email address associated with your account, and we’ll send a
          magic link to your inbox.
        </p>
        <p className="text-center">Your email</p>
        <form
          action=""
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submit");
          }}
        >
          <input type="email" name="email" placeholder="Email" />
          <br />
          <button
            type="submit"
            className="mt-8 bg-blue-700 hover:bg-blue-800 text text-white
                        -white font-bold py-2 px-4 rounded w-full"
          >
            Continue
          </button>
        </form>
        <hr />
        <p className="text-center py-4">
          Already have an account? <span className="text-blue-500">Log in</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
