import React from 'react'

const Post = (props) => {
    const {post} = props;
    return (
        <div key={post.id}>
            <span>{post.title}</span>
            <p>{post.body}</p>
        </div>
    )
}

export default Post;