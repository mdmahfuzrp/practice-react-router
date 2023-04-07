import React from 'react';
import './Post.css'
import {Link} from 'react-router-dom'

const Post = (params) => {
    const {id, title} = params.post;
    return (
        <div className='singlePost'>
            <p className='id'>Post ID: {id}</p>
            <p className='title'>Post Title: {title}</p>
            <Link className='postBtn action-btn' to={`/posts/single-post/${id}`}>Show Details</Link>
        </div>
    );
};

export default Post;