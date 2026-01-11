import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { DetailBlogView } from '../api/blog.api'
import {jwtDecode} from 'jwt-decode';

const DetailBlog = () => {
  const token=localStorage.getItem('access')
  const currentUserId=token ? jwtDecode(token).user_id:null;
  console.log(currentUserId)
  
  const { id } = useParams()
  const [blog,setBlog]=useState([])
  const [loading,setLoading]=useState(true)
  const [liked,setLiked]=useState(true)
  const [menuclicked,setMenuclicked]=useState(false)

  useEffect(()=>{
    const fetchdblog= async()=>{

      try{
        const res= await DetailBlogView(id)
        setBlog(res.data)
      }catch(err){
        console.log('error',err)
      }finally{
        setLoading(false)
      }
    }
    fetchdblog()
  },[])
  console.log('blog',blog.author_id)
if (loading){
  return <p>loading</p>
}

  return (
    <>
      <Navbar />
      <div className='w-full flex flex-col gap-4  p-3'>

        <div className='flex justify-between '>
          <div>
            <p className='text-2xl font-medium'>{blog.title}</p>
            <div className='text-sm text-gray-800'>Author : {blog.author} | Published : {blog.created_at} </div>
          </div>
          {currentUserId==blog.author_id &&<div className={`text-black text-2xl font-bold p-3 cursor-pointer ${menuclicked ? "bg-gray-200 rounded-full": ""} `} onClick={()=>setMenuclicked(!menuclicked)} >⋮</div>}
        </div>
        {menuclicked && <div className='absolute right-5 top-0 mt-30 flex flex-col items-end  shadow-md z-2'>
        <p className='menu-items '>Edit</p>
        <p className='menu-items'>Delete</p>
        </div>}
        <hr />

        <div >
          <p className='p-2 '>{blog.content}</p>
          <p className='text-xs text-blue-600'>last updated ({blog.updated_at})</p>
          <hr />
          <div className='flex justify-between pt-2'>
            <div className='text-sm'>Tags : {blog.category?.name}</div>
            {localStorage.getItem('access') &&
            <div>
              <button className='mr-4'>comments</button>
              <button  onClick={()=>setLiked(!liked)} className={` px-2 py-1  rounded-md  ${liked ? 'text-black-700' : 'bg-blue-500 text-white'}`}>♡ {blog.like_count}</button>
              
            </div>}
          </div>
        </div>

      </div>

    </>
  )
}

export default DetailBlog