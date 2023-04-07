import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2 className='single-title'>Total Post: {posts.length}</h2>
            <div className="allPost">
                
            {
                posts.map(post => <Post
                    key={post.id}
                    post={post}
                ></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;