import React, { Component } from 'react'
import PostItem from './PostItem'
import './PostList.css'

class PostList extends Component {
  render() {
    return (
      <div className='container'>
        <h4>პოსტები</h4>
        <hr />
        <br />
        <div>
          {this.props.data && this.props.data.map((post,index) => (
              <PostItem 
              post = {post}
              index = {index}
              handleShowComments = {this.props.handleShowComments}
              />
            ))}
        </div>
      </div>
    )
  }
}
export default PostList