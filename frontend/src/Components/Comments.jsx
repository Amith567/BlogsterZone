import { Link } from "react-router-dom"

const Comments = ({ comment }) => {
  return (
    <>

      <div className='my-3 border w-full rounded-md p-2'>
        <div className='flex flex-col'>
          <p className='font-semibold underline cursor-pointer text-blue-900'><Link
            to={`/${comment.commented_by_id}/profile`}
            className="underline cursor-pointer text-blue-900"
          >
            {comment.commented_user}
          </Link></p>
          <div className='text-xs text-gray-500'>{comment.created_at.slice(0, 10)} {comment.created_at.slice(11, 16)}</div>
        </div><hr />
        <div className='text-sm'>
          {comment.message}
        </div>
      </div>
    </>
  )
}

export default Comments