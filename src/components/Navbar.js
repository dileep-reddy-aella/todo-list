import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { logout } from '../features/userSlice'

const Navbar = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  return (
    <nav className='w-screen top-0 h-12 absolute bg-gray-100 z-10 py-2 px-8 flex items-center justify-between'>
      <p className='font-semibold cursor-pointer'>TODO LIST</p>
      <div className='flex items-center'>
        {/* <p className='px-3 py-1 rounded-md cursor-pointer hover:bg-gray-800 hover:text-white'>LOGIN</p> */}
        { user.loggedIn && 
          <p onClick={()=>dispatch(logout())} className='ml-8 px-3 py-1 rounded-md cursor-pointer hover:bg-gray-800 hover:text-white'>
            LOGOUT
          </p>
        }
      </div>
    </nav>
  )
}

export default Navbar
