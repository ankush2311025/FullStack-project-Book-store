import toast, { Toaster } from 'react-hot-toast';
import React from 'react'
import { Link,  useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios';

export default function Signup() {
  const location = useLocation()
  const Navigate = useNavigate()
  const fron = location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
    await axios.post("https://bookstore-backend-alpha.vercel.app/user/signup", userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Signed Successfully!');
        Navigate(fron, {replace:true});
        
      }
      localStorage.setItem("user", JSON.stringify(res.data.user));
    }).catch((err)=>{
      console.log(err);
      toast.success('User Already Exist');
    })};

  return (
    <div className='flex h-screen items-center justify-center bg-gray-100  dark:bg-slate-900 dark:text-white'>
      <div className="border-2 shadow-md p-6 rounded-md relative bg-white w-[350px]  dark:bg-slate-900 dark:text-white">
        {/* Close Button */}
        <Link to ='/'
          // type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"

        >
          ✕
        </Link>

        <h3 className="font-bold text-lg text-center mb-4  dark:bg-slate-900 dark:text-white">Sign Up</h3>

        {/* Signup Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-3">
            <label className="text-black block mb-1  dark:bg-slate-900 dark:text-white">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="text-black block mb-1  dark:bg-slate-900 dark:text-white">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="text-black block mb-1  dark:bg-slate-900 dark:text-white">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="btn bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-600 duration-200"
            >
              Sign Up
            </button>
            <p className="text-sm text-black  dark:bg-slate-900 dark:text-white">
              Already registered?
              <Link to="/" className="underline text-blue-500 ml-1">Login!</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
  }
