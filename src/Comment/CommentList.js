import React, { Component } from 'react'
import CommentItem from './CommentItem'
import './CommentList.css'

class CommentList extends Component {
  render() {
    return (
      <div className='container'>
        <h4>კომენტარები</h4>
        <hr />
        <br />
        <div>
          {this.props.comments && this.props.comments.map((comment) => (
              <CommentItem 
               comment = {comment}
              />
            ))}
        </div>
      </div>
    )
  }
}
export default CommentList