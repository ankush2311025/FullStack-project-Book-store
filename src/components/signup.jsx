import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
   <div className='flex h-screen items-center justify-center'>
         <div id="my_modal_3" className="border-2 shadow-md p-5 rounded-md">
           <div className="">
             <form method="div">
               {/* if there is a button in form, it will close the modal */}
               <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  dark:bg-slate-900 dark:text-white">✕</button>
             </form>
             <h3 className="font-bold text-lg">SignUp!</h3>
             <div className= 'mt-4 space-y-2'>
                {/* {Name} */}
                <div className= 'mt-4 space-y-2'>
               <span className=' text-black'>Name</span>
               <br/>
               <input type="text" placeholder="Enter your Name" className="w-80 px-30 border rounded-md outline-none" />
             </div>
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
               <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-500 duration-200">SignUp</button>
               <p className='text-black'>
                 Not registered yet?
                 <Link to = '/'className='underline text-blue-500 cursor-pointer ml-2'>Login!</Link>
               </p>
             </div>
           </div>
         </div>
       </div>
  )
}

