import { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import { AddBlog } from '../api/blog.api'


const NewBlog = () => {
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const [visibility,setVisibility]=useState('')
    const [category_id,setCategory]=useState('')
    const [error,setError]=useState('')
    const navigate=useNavigate()

    const handleSubmit = async(e)=>{
        console.log(title,content,category_id,visibility)
        e.preventDefault()
        setError('')
        if (!title || !content || !visibility || !category_id){
            setError('All fields are required !.')
            return
        }
        try{
            await AddBlog({title,content,visibility,category_id})
            navigate('/')
        }catch(err){
            setError(err?.response?.data?.message || err?.response?.data?.detail || 'Something went wrong!.')
        }

    }
    return (
        
        <>
            <Navbar />
            <div className='w-full flex justify-center mt-4'>
                <section className='w-sm lg:min-w-4xl  border border-blue-800 rounded-xl '>
                    <p className='text-2xl font-semibold text-center bg-blue-800 text-white w-full py-3 rounded-t-xl'>Crete New Blog</p>
                    <form className='px-3' onSubmit={handleSubmit}>
                        {error && <div className='mt-3 mb-3 text-xs text-red-500 text-center'>{error}</div>}
                        <div className='mt-3 mb-3'>
                            <label htmlFor="" className='label-items'>Title :</label>
                            <input type="text" className='inp-items' onChange={(e)=>{setTitle(e.target.value)}}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="" className='label-items'>Content :</label>
                            <textarea name="" id="" className='inp-items h-32'onChange={(e)=>{setContent(e.target.value)}}></textarea>
                        </div>
                        <div className='mb-3 flex gap-3'>
                            <div className='flex-1 '>
                                <label htmlFor="" className='label-items'>Visibility :</label>
                                <select name="" id="" className='inp-items text-xs' onChange={(e)=>{setVisibility(e.target.value)}}>
                                    <option value="" selected disabled>Select Visibility</option>
                                    <option value="public"  >Public</option>
                                    <option value="private">Private</option>
                                    <option value="protected">Protected</option>
                                </select>
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="" className='label-items'>Category :</label>
                                <select name="" id="" className='inp-items text-xs' onChange={(e)=>{setCategory(e.target.value)}}>
                                    <option value="" selected disabled>Select Category</option>
                                    <option value="4"  >Entertainment</option>
                                    <option value="3">Sports</option>
                                    <option value="1">Tech</option>
                                    <option value="2">Education</option>
                                </select>
                            </div>
                        </div>
                        <div className='mb-4 mt-4 flex justify-center'>
                        <button className='px-5 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800' type='submit'>Create</button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}

export default NewBlog