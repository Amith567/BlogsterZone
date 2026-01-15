import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { DetailBlogView, UpdateBlog } from "../api/blog.api"

const EditBlog = () => {
    const [error, setError] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [visibility, setVisibility] = useState('')
    const [category_id, setCategory] = useState('')
    const { id } = useParams()
    const navigate=useNavigate()

    useEffect(() => {
        const loadBlog = async () => {
            try {
                const res = await DetailBlogView(id)
                const data = res.data
                setTitle(data.title)
                setCategory(data.category.name)
                setContent(data.content)
                setVisibility(data.visibility)
            } catch (err) {
                setError(err)
            }

        }
        loadBlog()
    }, [id])

    const handleSubmit=async(e)=>{
        e.preventDefault()

        setError('')
        try{
            await UpdateBlog(id,{title,content,visibility,category:{category_id}})
            navigate('/')
        }catch(err){
            setError(err)
        }
    }


    return (
        <>
            <div className='w-full h-md flex justify-center m-5 '>
                <section className='w-sm lg:min-w-4xl  border border-blue-800 rounded-xl '>
                    <p className='text-2xl font-semibold text-center bg-blue-800 text-white w-full py-3 rounded-t-xl'>Crete New Blog</p>
                    <form className='px-3' onSubmit={handleSubmit}>
                        {error && <div className='mt-3 mb-3 text-xs text-red-500 text-center'>{error}</div>}
                        <div className='mt-3 mb-3'>
                            <label htmlFor="" className='label-items'>Title :</label>
                            <input type="text" className='inp-items' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="" className='label-items'>Content :</label>
                            <textarea name="" id="" className='inp-items h-32' value={content} onChange={(e) => { setContent(e.target.value) }}></textarea>
                        </div>
                        <div className='mb-3 flex gap-3'>
                            <div className='flex-1 '>
                                <label htmlFor="" className='label-items'>Visibility :</label>
                                <select name="" id="" className='inp-items text-xs' value={visibility} onChange={(e) => { setVisibility(e.target.value) }}>
                                    <option value='' disabled>Select Visibility</option>
                                    <option value="public"  >Public</option>
                                    <option value="private">Private</option>
                                    <option value="protected">Protected</option>
                                </select>
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="" className='label-items'>Category :</label>
                                <select name="" id="" className='inp-items text-xs' value={category_id} onChange={(e) => { setCategory(e.target.value) }}>
                                    <option value=''  disabled>Select Category</option>
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

export default EditBlog

