import React from 'react'
import { Link } from 'react-router-dom'

export default function login() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  dark:bg-slate-900 dark:text-white">✕</button>
          </form>
          <h3 className="font-bold text-lg">Login!</h3>
          <div className= 'mt-4 space-y-2'>
            <span className=' text-black'>Email</span>
            <br/>
            <input type="email" placeholder="Enter your email" className="w-80 px-30 border rounded-md outline-none" />
          </div>
          {/* {Passsword} */}
          <div className='mt-4 space-y-2'>
            <span className='text-black'>Password</span>
            <br/>
            <input type="password" placeholder="Enter your Password" className="w-80 px-30 border rounded-md outline-none" />
          </div>
          {/* {Button} */}
          <div className="flex justify-between mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-500 duration-200">Login</button>
            <p className='text-black'>
              Not registered yet?
              <Link to = '/signup'className='underline text-blue-500 cursor-pointer ml-2'>SignUp!</Link>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  )
}
