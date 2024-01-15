import {useState} from 'react'
import Post from './Post/Post'
import PostList from './Post/PostList'
function Body({darkMode}) {
  //スタイルを定義する
const Styles={
  backgroundColor: darkMode? '#333':'#FFF',
  color: darkMode? '#FFF':'#333'
}

const [post,setPost]=useState("")
const [posts, setPosts] = useState([]);
 // 新しいポストを追加する関数
const addPost = (newPost) => {
  setPosts([...posts, newPost]);
};

  return (
    <div style={Styles} >
      <Post post={post}
            setPost={setPost}
            addPost={addPost}/>
      <PostList posts={posts} />
    </div>
  )
}

export default Body
