import React from 'react'
import { useAuth } from '../context/AuthProvider.jsx';
import toast from 'react-hot-toast';

export default function logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
  try {
    setAuthUser({
      ...authUser,
      authUser: null,
    })
    localStorage.removeItem('Users');
    toast.success('Logout successful');
    window.location.reload();
  } catch (error) {
    toast.error('Logout failed');
  }}
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
      onClick={handleLogout}>
        Logout</button>
    </div>
  )
}
