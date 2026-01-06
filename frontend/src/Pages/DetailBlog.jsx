import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'


const DetailBlog = () => {
    const { id } = useParams()
  const [liked,setLiked]=useState(true)
  const [menuclicked,setMenuclicked]=useState(false)
    const blog = {
    "id": 101,
    "author": "Amith Anil",
    "title": "Understanding Zero-Knowledge Proofs ",
    "content": "This artIn the modern digital era, privacy has become a critical concern as more systems rely on online authentication and data sharing. Traditional verification mechanisms often require users to disclose sensitive information, increasing the risk of data breaches and misuse. Zero-Knowledge Proofs address this challenge by offering a cryptographic method that allows one In the modern digital era, privacy has become a critical concern as more systems rely on online authentication and data sharing. Traditional verification mechanisms often require users to disclose sensitive information, increasing the risk of data breaches and misuse. Zero-Knowledge Proofs address this challenge by offering a cryptographic method that allows one party to prove the validity of a statement without revealing the underlying data itself.In the modern digital era, privacy has become a critical concern as more systems rely on online authentication and data sharing. Traditional verification mechanisms often require users to disclose sensitive information, increasing the risk of data breaches and misuse. Zero-Knowledge Proofs address this challenge by offering a cryptographic method that allows one party to prove the validity of a statement without revealing the underlying data itself.In the modern digital era, privacy has become a critical concern as more systems rely on online authentication and data sharing. Traditional verification mechanisms often require users to disclose sensitive information, increasing the risk of data breaches and misuse. Zero-Knowledge Proofs address this challenge by offering a cryptographic method that allows one party to prove the validity of a statement without revealing the underlying data itself.In the modern digital era, privacy has become a critical concern as more systems rely on online authentication and data sharing. Traditional verification mechanisms often require users to disclose sensitive information, increasing the risk of data breaches and misuse. Zero-Knowledge Proofs address this challenge by offering a cryptographic method that allows one party to prove the validity of a statement without revealing the underlying data itself.In the modern digital era, privacy has become a critical concern as more systems rely on online authentication and data sharing. Traditional verification mechanisms often require users to disclose sensitive information, increasing the risk of data breaches and misuse. Zero-Knowledge Proofs address this challenge by offering a cryptographic method that allows one party to prove the validity of a statement without revealing the underlying data itself.In the modern digital era, privacy has become a critical concern as more systems rely on online authentication and data sharing. Traditional verification mechanisms often require users to disclose sensitive information, increasing the risk of data breaches and misuse. Zero-Knowledge Proofs address this challenge by offering a cryptographic method that allows one party to prove the validity of a statement without revealing the underlying data itself.party to prove the validity of a statement without revealing the underlying data itself.icle explains the basics of ZKP and how it can be applied in secure voting systems.",
    "visibility": "public",
    "category": "Technology",
    "category_id": 3,
    "created_at": "2026-01-05T10:30:00Z",
    "updated_at": "2026-01-05T12:15:00Z",
    "like_count": 42,
    "liked_by_user": true
  }
  return (
    <>
      <Navbar />
      <div className='w-full flex flex-col gap-4  p-3'>

        <div className='flex justify-between '>
          <div>
            <p className='text-2xl font-medium'>{blog.title}</p>
            <div className='text-sm text-gray-800'>Author : {blog.author} | Published : {blog.created_at.slice(0, 10)} </div>
          </div>
          <div className={`text-black text-2xl font-bold p-3 cursor-pointer ${menuclicked ? "bg-gray-200 rounded-full": ""} `} onClick={()=>setMenuclicked(!menuclicked)} >⋮</div>
        </div>{menuclicked && <div className='absolute right-5 top-0 mt-30 flex flex-col items-end  shadow-md z-2'>
        <p className='menu-items '>Edit</p>
        <p className='menu-items'>Delete</p>
        </div>}
        <hr />

        <div >
          <p className='p-2 '>{blog.content}</p>
          <p className='text-xs text-blue-600'>last updated ({blog.updated_at.slice(0, 10)})</p>
          <hr />
          <div className='flex justify-between pt-2'>
            <div className='text-sm'>Tags : {blog.category}</div>
            <div>
              <button className='mr-4'>comments</button>
              <button  onClick={()=>setLiked(!liked)} className={` px-2 py-1  rounded-md  ${liked ? 'text-black-700' : 'bg-blue-500 text-white'}`}>♡ {blog.like_count}</button>
              
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default DetailBlog