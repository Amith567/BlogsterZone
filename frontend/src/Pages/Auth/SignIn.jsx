import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginUser } from '../../api/auth.api'

const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    if (!username || !password) {
      setError('all field data is required')
      setLoading(false)
      return
    }

    try {
      const res = await LoginUser({ username, password });
      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh',res.data.refresh)
      navigate('/')
    }
    catch (err) {
      setError(err.response?.data?.detail || "invalid credentials")
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className='w-full min-h-screen flex items-center justify-center'>
        <section className='w-sm rounded-md border-1 border-blue-800 rounded-xl '>
          <div className='bg-blue-800 text-white rounded-t-xl  text-xl font-semibold text-center py-3'>Login</div>
          <form className='p-4 mt-2' onClick={handleClick}>
            <div className='mb-3'>
              {error && <p className='text-sm text-red-400 mb-3 text-center'>{error}</p>}
              <label className='label-items'>Username :</label>
              <input type="text" className='inp-items' onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='mb-3'>
              <label className="label-items" >Password</label>
              <input type="password" className='inp-items' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <p className='text-center text-sm mb-3'>Don't have an account? <span className='text-blue-700 underline cursor-pointer'><Link to='/register'>Sign In</Link></span></p>

            <button className='text-white bg-blue-800 px-3 py-2 w-full rounded-md hover:bg-blue-900'  type='submit'>Login</button>
            {loading && "logging.."}
          </form>
        </section>
      </div>
    </>
  )
}

export default SignIn

