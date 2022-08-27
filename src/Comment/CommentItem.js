import React from 'react'
import './CommentItem.css'

function CommentItem({comment}) {
  return (
    <div className='d-inline-block card mt-3 mr-4'>
      <div className='card-body'>
            <div
                key={comment.id}
                className="collection-item left-align purple lighten-2"
            >
                <p>User - {comment.email}</p>
                <p>{comment.name} </p>
                <p>{comment.body}</p>
            </div>
      </div>
    </div>
  )
}

export default CommentItem