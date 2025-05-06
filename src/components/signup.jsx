import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
   <>
    <div className='flex justify-center items-center h-screen' >
      <div className="w-[600px]">
        <div className="modal-box">
          <form>
            {/* if there is a button in form, it will close the modal */}
            <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => window.history.back()}>✕</button>
          </form>
          <h3 className="font-bold text-lg">SignUp!</h3>
          {/* {Name} */}
          <div className='mt-4 space-y-2'>
            <span>Name</span>
            <br/>
            <input type="text" placeholder="Enter your name" className="w-80 px-4 border rounded-md outline-none" />
         </div>
          {/* {Email} */}
          <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br/>
            <input type="email" placeholder="Enter your email" className="w-80 px-4 border rounded-md outline-none" />
          </div>
          {/* {Passsword} */}
          <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br/>
            <input type="password" placeholder="Enter your Password" className="w-80 px-4 border rounded-md outline-none" />
          </div>
          {/* {Button} */}
          <div className="flex justify-between mt-4">
            <button  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-500 duration-200">SignUp</button>
            <p>
              Having an account?
              <Link to='/' className='underline text-blue-500 cursor-pointer'>Login!</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}
