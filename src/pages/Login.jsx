import { BsEyeSlash } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";

export default function Login() {
  return (
    <div className="flex flex-col max-w-md mx-auto">
      <p className="mb-5 text-xl font-semibold ">Login</p>
      <div>
        <p className="mb-1">Email</p>
        <input
          className="w-full p-2 border-2 border-solid max-w-7xl border-stone-900"
          type="text"
          maxLength={100}
        />
      </div>
      <div className="relative my-5">
        <p className="mb-1">Password</p>
        <input
          className="w-full p-2 border-2 border-solid max-w-8xl border-stone-900"
          type="text"
          maxLength={100}
        />
        <button className="absolute top-9 right-4">
          <BsEyeSlash />
        </button>
      </div>
      <div className="mb-5">
        <p className="mb-1 text-center">Forgot Password?</p>
      </div>
      <div>
        <div className="p-2 mb-3 border-2 border-solid bg-stone-900">
          <p className="text-center text-white">Login</p>
        </div>
        <p className="mb-3 text-center">or</p>
        <div className="p-2 mb-4 gap bg-problue">
          <button className="absolute text-lg text-white" >
          <BsFacebook />
          </button>
          <p className="self-center text-center text-white">Continue with Facebook</p>
        </div>
        <div className="p-2 mb-4 border-2 border-solid border-gray-950">
          <button className="absolute text-lg" >
          <BsApple />
          </button>
          <p className="self-center text-center">Continue with Facebook</p>
        </div>
      </div>
      <div className="my-6">
        <p className="mb-5 text-lg font-semibold">Create Account</p>
        <p className="mb-5">
          By creating an account with Gentle Monster, you will be able to place
          your orders, save shipping preferences, create your wish list among
          other benefits.
        </p>
        <div className="p-2 border-2 border-solid bg-stone-900">
          <p className="text-center text-white">Create Account</p>
        </div>
      </div>
      <div className="my-6">
        <p className="mb-5 text-lg font-semibold">Check Your Order Status</p>
        <p className="mb-5">
          If you purchased items without creating an account, you can track your
          order here.
        </p>
        <div className="p-2 border-2 border-solid bg-stone-900">
          <p className="text-center text-white">Track Order</p>
        </div>
      </div>
    </div>
  );
}
