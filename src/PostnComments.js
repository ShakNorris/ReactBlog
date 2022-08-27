import React, { Component } from 'react'
import * as db from './data'
import PostItem from './Post/PostItem'
import axios from 'axios'
import CommentList from './Comment/CommentList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


class PostnComments extends Component {

    state = {
      id: '',
      title: '',
      body: '',
      comments: []
    }

  componentDidMount(){
    // const posts = JSON.stringify(localStorage.getItem('posts'));
    // const currentpost = posts.filter((x) => x.id === this.props.id)
    const currentPost = db.getUserById(this.props.currentId);
    this.setState(
    {
      id: this.props.currentId,
      title: currentPost[0].title,
      body: currentPost[0].body,
    }
  )

    axios.get(`https://jsonplaceholder.typicode.com/comments`).then(res => {
      const comments = res.data.filter((x) => x.postId === this.state.id);
      this.setState({ comments });
  });
  }

  render() {
    return (
      <div className='container filter-form'>
        <h4>პოსტი და კომენტარები</h4>
        <hr />
        <br />
        <button
          type='button'
          className='btn btn-secondary'
          onClick={() => this.props.close()}
        >
          <FontAwesomeIcon icon = {faTimesCircle} />
        </button>
        <PostItem post = {this.state} index = {this.state.id} />
        <div className="jumbotron-div col s12">
          <CommentList comments = {this.state.comments}/>
        </div>
      </div>
    )
  }
}

export default PostnComments;