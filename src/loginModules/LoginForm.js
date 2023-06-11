import React from "react";
import TextField from "../helpers/TextField";
import Button from "../helpers/Button";

const LoginForm = () => {
  return (
    <div>
      <form className="mr-4 mt-6 md:mt-0 bg-[#00000014] shadow-[0_0_40px_rgba(57,78,196,3.4)] px-16 py-8 rounded-lg">
        <h1 className="mb-4 text-4xl">Welcome Back !</h1>
        <h2 className="text-xl text-[#c6c6ff]">login to your account</h2>

        <div className="flex flex-col my-4">
          <TextField type="email" placeholder="enter your email" name="Email" />
          <TextField
            type="password"
            placeholder="enter your password"
            name="Password"
          />
        </div>
        <Button text="login" />
      </form>
    </div>
  );
};

export default LoginForm;
