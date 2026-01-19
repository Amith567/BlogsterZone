import Navbar from '../Components/Navbar'
import Blog from '../Components/Blog'
import { useEffect, useState } from 'react'
import { UserBlogs } from '../api/blog.api'

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const loadblogs = async () => {
      try {
        const res = await UserBlogs()
        setBlogs(res.data)
      } catch (err) {
        setError(err?.response?.data?.detail || 'Something went wrong!.')
      }
    }
    loadblogs()
  }, [])

  if (error) {
    return <p>{error}</p>
  }
  return (
    <>
      <Navbar />
      {blogs.map((blog) => (<Blog key={blog.id} blog={blog} />))}
    </>
  )
}

export default MyBlogs