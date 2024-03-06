// IMPORT DEPENDENCIES //
import React from "react";
import { useNavigate } from "react-router-dom";

// MAIN //
function Login() {
  // VARIABLES
  const navigate = useNavigate();
  // FUNCTIONS //
  const HandleLogin = () => {
    console.log("Login Button Clicked");
    navigate("/home");
  };
  return (
    <div className="flex justify-around sm:flex-row flex-col items-center border-2 border-red-800 md:grid-cols-2 bg-slate-600 h-screen w-screen md:bg-green-600 ">
      <div>
        <h1 className="text-3xl font-bold">LOGIN HERE</h1>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center h-[200px] sm:w-[400px] w-[250px] rounded-lg bg-slate-300">
          <h1>Enter Your Details Below</h1>
          <input
            placeholder="Email"
            className="w-[80%] h-[50px] mb-10 rounded-lg"
          ></input>
          <input
            placeholder="Password"
            className="w-[80%] h-[50px] rounded-lg"
          ></input>
          <button
            onClick={HandleLogin}
            className="w-[50%] bg-slate-500 h-10 rounded-md my-2"
          >
            Login
          </button>
          <p>
            Dont have an account? <a href="/SignUp"> Sign Up</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
