import React from 'react'
import './PostItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function PostItem({post,index,handleShowComments}) {
  return (
    <div className='d-inline-block card mt-3 mr-5'>
      <div className='card-body'>
            <article key={index}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <button 
                className='btn btn-warning float-right ml-2 mb-2'
                onClick={() => handleShowComments(post.id)}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </article>
      </div>
    </div>
  )
}

export default PostItem