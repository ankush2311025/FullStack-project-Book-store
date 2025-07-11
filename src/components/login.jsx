import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function login() {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();
  const onSubmit =async (data) => {
    const userInfo = {
      
      email:data.email,
      password:data.password
    }
    await axios.post("https://bookstore-backend-alpha.vercel.app/user/login", userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Loggedin Successfully!');
        setTimeout(() => {
          window.location.reload();
      localStorage.setItem("Users", JSON.stringify(res.data.user));
        }, 2000);
        
      }
    }).catch((err)=>{
      console.log(err);
      
      toast.error("User Already Exist");
      setTimeout(()=>{}, 2000);
    })};
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>
            ✕
          </button>

          
          <h3 className="font-bold text-lg">Login!</h3>
          <div className= 'mt-4 space-y-2'>
            <span className=' text-black'>Email</span>
            <br/>
            <input type="email" placeholder="Enter your email" className="w-80 px-30 border rounded-md outline-none"{...register("email", { required: true })}/>
            <br/>
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    
          </div>


          {/* {Passsword} */}
          <div className='mt-4 space-y-2'>
            <span className='text-black'>Password</span>
            <br/>
            <input type="password" placeholder="Enter your Password" className="w-80 px-30 border rounded-md outline-none" {...register("password", { required: true })}  />
            <br/>{errors.password && <span className='text-sm text-red-500'>This field is required</span>}
          </div>


          {/* {Button} */}
          <div className="flex justify-between mt-4">
            <button  type='submit' className=" btn bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-500 duration-200">Login </button>
            <p className='text-black'>
              Not registered yet?
              <Link to = '/signup'className='underline text-blue-500 cursor-pointer ml-2'>SignUp!</Link>
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}
