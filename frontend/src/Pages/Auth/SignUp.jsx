import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../api/axios'
import { RegisterUser } from '../../api/auth.api'
const SignUp = () => {
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState('')
  const navigate=useNavigate()

  const handleSubmit= async(e)=>{
    e.preventDefault()
    setLoading(true)
    setError('')
    if (!username || !email || !password){
      setError("All fields are required !.")
      setLoading(false)
    }
    try{
      const res=await RegisterUser({username,email,phone,password})
      navigate('/login')
    }catch(err){
      setError('error occured , user not created!')
    }finally{
      setLoading(false)
    }

  }
  return (
    <>
      <div className='w-full min-h-screen flex items-center justify-center '>
        <div className='w-sm rounded-xl border-blue-800 border-1'>
          <p className='bg-blue-800 text-white text-center py-3 text-xl font-semibold rounded-t-xl'>Register</p>
          <form className='p-3' onSubmit={handleSubmit}>

            <div className='mb-3'>
               {error && <p className='text-sm text-red-400 text-center mb-3'>{error}</p>}

              <label className='label-items'>User Name :</label>
              <input type="text" className='inp-items' onChange={(e)=>{setUsername(e.target.value)}}/>
            </div>
              <div className='mb-3'>
              <label className='label-items'>Email :</label>
              <input type="email" className='inp-items' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
              <div className='mb-3'>
              <label className='label-items'>Phone No :</label>
              <input type="number" className='inp-items' onChange={(e)=>setPhone(e.target.value)}/>
            </div>

            <div className='mb-3'>
              <label className='label-items'>Password :</label>
              <input type="password" className='inp-items'onChange={(e)=>setPassword(e.target.value)} />
            </div>

            <p className='text-sm text-center mb-3'>Already have an account?<span className='underline text-blue-800 cursor-pointer'><Link to='/login'> Sign In</Link></span></p>
            <button className='w-full bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-md ' type='submit'>Register</button>
            {loading && <p className='text-blue-700 text-sm text-center font-bold mx-2'>Registering ....</p>}
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp