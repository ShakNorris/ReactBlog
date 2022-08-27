import './App.css'
import React from 'react'
import Header from './Header'
import axios from 'axios'
import PostList from './Post/PostList'
import Search from './Search/Search'
import PostnComments from './PostnComments'

class App extends React.Component {  
  state = {
    id:  '',
    searchValue : '',
    showComments: false,
    data: [],
    currentId : ''
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      let newData = res.data.slice(0,30);
      this.setState({
        id: newData[newData.length - 1].id + 1,
        data: newData
      }, () => console.log(this.state.id))
      console.log(newData)
    })
    .catch(err => console.log("Couldn't fetch data. Error: " + err))
  }

  componentDidUpdate(prevProps, prevState)
  {
    if(prevState.searchValue !== this.state.searchValue)
    { 
      const posts = this.state.data;
      const data = posts.filter((x) => 
      x.title.toUpperCase().includes(this.state.searchValue.toUpperCase()))
      this.setState({
        data: data,
      })
    }
    localStorage.setItem('posts', JSON.stringify(this.state.data))
  }

  onSearch = (e) => {
    console.log('searchValue', e)
    this.setState({ searchValue: e.target.value })
  }

  handleSearch = (event) => {
    const posts = this.state.data.filter((x) =>
      x.title.toUpperCase().includes(event.target.value.toUpperCase())
    )
    this.setState({
      searchValue: event.target.value,
      data: posts
    })
  }

  handleShowCommentsClose = () => {
    this.setState({ showComments: false })
  }

  handleShowComments = (id) => {
    this.setState({ showComments: true, currentId : id })
  }

  render() {
    if(this.state.showComments){
      return(
      <>
        <Header />
        <PostnComments currentId = {this.state.currentId} close = {this.handleShowCommentsClose}/>
      </>
      )
    }
    else{
      return (
        <>
        <Header />
        <Search searchValue={this.state.searchValue} handleSearch={this.handleSearch}/>
        <PostList data={this.state.data} id = {this.state.id} handleShowComments = {this.handleShowComments}/>
        </>
      );
    }
  }
}

export default App;
