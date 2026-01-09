import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <div className='w-full min-h-screen flex items-center justify-center '>
        <div className='w-sm rounded-xl border-blue-800 border-1'>
          <p className='bg-blue-800 text-white text-center py-3 text-xl font-semibold rounded-t-xl'>Register</p>
          <form className='p-3'>
            <div className='mb-3'>
              <label className='label-items'>User Name :</label>
              <input type="text" className='inp-items'/>
            </div>
              <div className='mb-3'>
              <label className='label-items'>Email :</label>
              <input type="email" className='inp-items' />
            </div>
              <div className='mb-3'>
              <label className='label-items'>Phone No :</label>
              <input type="number" className='inp-items' />
            </div>

            <div className='mb-3'>
              <label className='label-items'>Password :</label>
              <input type="password" className='inp-items' />
            </div>

            <p className='text-sm text-center mb-3'>Already have an account?<span className='underline text-blue-800 cursor-pointer'><Link to='/login'> Sign In</Link></span></p>
            <button className='w-full bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-md '>Register</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp