
import { useNavigate } from 'react-router-dom'

const Blog = ({blog}) => {

    const navigate=useNavigate()

    return (
        <>
            <div className='w-full  p-3'>
                <div className='rounded-md flex flex-col ' onClick={()=>navigate(`/blog/${blog.id}`)}>
                    <div className='bg-blue-900 rounded-t p-2'>
                        <div className='text-xl text-white '>{blog.title}</div>
                        <div className='text-xs text-gray-300'>Author : {blog.author} | Published : {blog.created_at} | Likes : {blog.like_count}</div>
                    </div>

                    <div className='p-2 text-sm break-words'>{blog.content.slice(0,860)} <span className='text-blue-600 underline'>(click to continue reading)</span></div>
                    <div className='p-2 text-sm border-b border-blue-600'>Tags : {blog.category?.name}</div>

                </div>
            </div>
            
            </>
    )
}

export default Blog