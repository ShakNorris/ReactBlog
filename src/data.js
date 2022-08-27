export function getPosts(){
    const posts = JSON.parse(localStorage.getItem('posts'));
    return posts
}


export function getUserById(id) {
  return JSON.parse(localStorage.getItem('posts')).filter(x => x.id === id);
}