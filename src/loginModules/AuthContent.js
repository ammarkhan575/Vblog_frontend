import { useState } from "react";
import LoginForm from "./LoginForm";
import Button from "../helpers/Button";
import SignUpForm from "./SignUpForm";

const AuthContent = () => {

  const [login, setLogin] = useState(false);

  const setStatus = ()=>{
    setLogin(!login);
  }

  return (
    <div className="w-full flex flex-col justify-between items-center mt-12 md:flex-row">
      <div className="ml-4 flex flex-col gap-6">
        <h3 className="md:text-xl text-cyan-400 font-semibold text-sm">
          SPREADING LEARNING THROUGH BLOGS
        </h3>
        <h1 className="text-4xl md:text-6xl text-gray-300 leading-tight">
          We make you <br />{" "}
          <span className="font-bold text-white">"Love Blogs"</span>
        </h1>
        <p className="text-m text-gray-300 font-semibold">
          {!login ? 'Login for Old user' : 'New to this platform ?' }
        </p>
        {
          login ? (
            <Button text="Signup" setStatus={setStatus}/>
          ):
          (
            <Button text="Login" setStatus={setStatus}/>
          )
        }
      </div>
      {
        login ? (
          <LoginForm />
        ) : (
          <SignUpForm />
        )
      }
    </div>
  );
};

export default AuthContent;
