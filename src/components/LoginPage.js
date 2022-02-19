import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { login } from '../features/userSlice'
import { selectUser } from '../features/userSlice'

const LoginPage = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const [userData, setUserData] = React.useState({username: '', password: ''})
  const navigate = useNavigate()

  React.useEffect(() => {
    console.log(user.loggedIn)
    if (user.loggedIn) {
      navigate('/todos')
    }
  }, [user])

  const error = 'Invalid Credentials'

  const userLogin = () => {
    dispatch(login({...userData}))
  }

  return (
    <div className='flex flex-col my-auto w-4/5 items-center'>
      { user.error && <p className='mb-3 text-red-500'>{error}</p> }
      <input type='text' value={userData.username} onChange={e => setUserData({...userData, username: e.target.value})} placeholder='Enter your username' className='bg-none w-full h-12 border-none ml-3 flex-auto rounded-xl focus:outline-none px-3'/>
      <input type='text' value={userData.password} onChange={e => setUserData({...userData, password: e.target.value})} placeholder='Enter your password' className='bg-none w-full h-12 border-none ml-3 flex-auto rounded-xl focus:outline-none my-6 px-3'/>
      <button className='bg-gray-800 rounded-xl h-12 w-5/12 text-white hover:text-slate-900 hover:shadow hover:bg-gray-100 hover:border hover:border-solid hover:border-gray-800'
        onClick={userLogin}
      >
        Log in
      </button>
    </div>
  )
}

export default LoginPage
