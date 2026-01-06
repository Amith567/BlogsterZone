import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <div className='w-full min-h-screen flex items-center justify-center'>
        <section className='w-sm rounded-md border-1 border-blue-800 rounded-xl '>
        <div className='bg-blue-800 text-white rounded-t-xl  text-xl font-semibold text-center py-3'>Login</div>
        <form className='p-4 mt-2'>
          <div className='mb-3'>
            <label className='label-items'>Username :</label>
            <input type="text" className='inp-items' />
          </div>
          <div className='mb-3'>
            <label className="label-items" >Password</label>
            <input type="password" className='inp-items' />
          </div>
          <p className='text-center text-sm mb-3'>Don't have an account? <span className='text-blue-700 underline cursor-pointer'><Link to='/register'>Sign In</Link></span></p>
          <button className='text-white bg-blue-800 px-3 py-2 w-full rounded-md hover:bg-blue-900'>Login</button>
        </form>
        </section>
      </div>
    </>
  )
}

export default Signup

