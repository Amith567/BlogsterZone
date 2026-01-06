import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blog = () => {
    const navigate=useNavigate()
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
        "like_count": 42
        // "liked_by_user": True
    }

    return (
        <>
            <div className='w-full  p-3'>
                <div className='rounded-md flex flex-col ' onClick={()=>navigate(`/blog/${blog.id}`)}>
                    <div className='bg-blue-900 rounded-t p-2'>
                        <div className='text-xl text-white '>{blog.title}</div>
                        <div className='text-xs text-gray-300'>Author : {blog.author} | Published : {blog.created_at.slice(0,10)} | Likes : {blog.like_count}</div>
                    </div>

                    <div className='p-2 text-sm'>{blog.content.slice(0,500)} <span className='text-blue-600 underline'>(click to continue reading)</span></div>
                    <div className='p-2 text-sm border-b border-blue-600'>Tags : {blog.category}</div>

                </div>
            </div>
            
            </>
    )
}

export default Blog