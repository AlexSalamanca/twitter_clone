import React from 'react';
import Post from './Post.js';

const Posts = (props) => {
    const {posts, isLoading} = props;

    if(!posts || posts.length === 0){
        return <p>No posts available.</p>
    }

    return(
        <div>
            <h2>Posts</h2>
            {!isLoading && posts.map((post) => {
                return(
                    <Post key={post.id} post ={post} />
                );
            })}
        </div>
    );
}

export default Posts;