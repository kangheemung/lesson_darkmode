import {useState} from 'react'
import Post from './Post/Post'
import PostList from './Post/PostList'
function Body({darkMode}) {


const [post,setPost]=useState("")
const [posts, setPosts] = useState([]);
 // 新しいポストを追加する関数
const addPost = (newPost) => {
  setPosts([...posts, newPost]);
};

  return (
    <div >
      <Post post={post}
            setPost={setPost}
            addPost={addPost}/>
      <PostList posts={posts} />
    </div>
  )
}

export default Body
