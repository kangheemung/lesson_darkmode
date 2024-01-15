import React from 'react'

function PostList({ posts }) {
  return (
    <ul>
        {posts.map((post, index) => (
            <li key={index}>{post}</li>
        ))}
    </ul>

  );
}

export default PostList
