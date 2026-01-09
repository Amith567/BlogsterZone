import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Blog from '../Components/Blog'
import { ListBlogs } from '../api/blog.api'

const Home = () => {
  const [blogs,setBlogs]=useState([])
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    const fetchblogs =async()=>{
      try{
        const res=await ListBlogs()
        setBlogs(res.data)

      }catch(err){
        console.log('error occured',err)
      }finally{
        setLoading(false)
      }}
fetchblogs()
},[])
if(loading){
  return <p>loading</p>
}
if(!blogs.length){
  return <p>error occured while fetching</p>
}

  return (
    <div><Navbar/>
    {blogs.map((blog)=>(<Blog key={blog.id} blog={blog}/>))}
    

    </div>
  )
}

export default Home