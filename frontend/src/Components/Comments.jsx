import React from 'react'

const Comments = ({comment}) => {
  return (
    <>
    
      <div className='my-3 border w-full rounded-md p-2'>
        <div className='flex flex-col'>
        <p className='font-semibold'>{comment.commented_user}</p>
        <div className='text-xs text-gray-500'>{comment.created_at.slice(0,10)} {comment.created_at.slice(11,16)}</div>
        </div><hr />
        <div className='text-sm'>
          {comment.message}
        </div>
      </div>
    </>
  )
}

export default Comments