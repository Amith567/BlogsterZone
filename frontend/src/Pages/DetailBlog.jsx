import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { DeleteBlog, DetailBlogView, GetComments, LikeBlog } from '../api/blog.api'
import { jwtDecode } from 'jwt-decode';
import Comments from '../Components/Comments';


const DetailBlog = () => {
  const token = localStorage.getItem('access')
  const currentUserId = token ? jwtDecode(token).user_id : null;
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(0)
  const [menuclicked, setMenuclicked] = useState(false)
  const [commentclicked, setCommentclicked] = useState(true)
  const navigate = useNavigate()
  const [comments,setComments]=useState('')

  const blogDelete = async () => {
    const confirmDelete = window.confirm('do you want to delete ?')
    if (!confirmDelete) {
      return
    }
    try {
      await DeleteBlog(id)
      navigate('/')
    } catch (err) {
      console.log(err)
      alert('failed to delete')
    }
  }

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await DetailBlogView(id)
        const comment_res=await GetComments(id)
        const blogData = res.data
        setComments(comment_res.data)
        setBlog(blogData)
        setLiked(blogData.liked_by_user)
        setLikes(blogData.like_count)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchBlog()
  }, [id])


  const handleLike = async () => {
    try {
      await LikeBlog(id)
      setLiked(prev => !prev)
      setLikes(prev => (liked ? prev - 1 : prev + 1))
    } catch (err) {
      console.error('Like failed', err)
    }
  }




  if (loading) {
    return <p>loading</p>
  }
  return (
    <>
      <Navbar />
      <div className='w-full flex flex-col gap-4  p-3'>

        <div className='flex justify-between '>
          <div>
            <p className='text-2xl font-medium'>{blog.title}</p>
            <div className='text-sm text-gray-800'><span className='underline cursor-pointer' onClick={(e) => {
              e.stopPropagation()
              navigate(`/${blog.author_id}/profile`)
            }}>Author : {blog.author} </span>| Published : {blog.created_at} </div>
          </div>
          {currentUserId == blog.author_id && <div className={`text-black text-2xl font-bold p-3 cursor-pointer ${menuclicked ? "bg-gray-200 rounded-full" : ""} `} onClick={() => setMenuclicked(!menuclicked)} >⋮</div>}
        </div>
        {menuclicked && <div className='absolute right-5 top-0 mt-30 flex flex-col items-end  shadow-md z-2'>
          <p className='menu-items ' onClick={() => navigate(`/blog/${id}/edit`)}>Edit</p>
          <p className='menu-items' onClick={blogDelete}>Delete</p>
        </div>}
        <hr />

        <div >
          <p className='p-2 break-words'>{blog.content}</p>
          <p className='text-xs text-blue-600'>last updated ({blog.updated_at})</p>
          <hr />
          <div className='flex justify-between pt-2'>
            <div className='text-sm text-blue-800'>Tags : {blog.category?.name} <span className='ml-5 text-red-800'> Visibility : {blog.visibility}</span></div>
            {localStorage.getItem('access') &&
              <div>
                <button className={`mr-4 px-3 py-2 transition rounded-md ${commentclicked
                    ? "bg-gray-500 text-white"
                    : "text-black hover:bg-gray-200"
                  }`} onClick={() => {setCommentclicked(prev=>!prev);
                  handleComments;}}>comments</button>
                <button onClick={handleLike} className={` px-2 py-1  rounded-md  text-white ${liked ? ' bg-red-700' : 'bg-blue-700 '}`}>♡ {likes}</button>

              </div>}
          </div>
        </div>

      </div><hr />
      {commentclicked &&
        <div className='w-full h-500 px-3 pt-5'>
          <div className='w-full flex gap-3'>
            <input type="text" name="" className="flex-1 inp-items" placeholder='write a comment ...'/>
            <button className='px-5 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800' type='submit'>Submit</button>
          </div>
          {comments.map((comment)=>(<Comments key={comment.id} comment={comment} />))}

        </div>}

    </>
  )
}

export default DetailBlog