import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './SinglePost.css'

const SinglePost = () => {
    const singlePost = useLoaderData();
    const {id, title, body} = singlePost;
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h1 className='compo-title'>Single Post Details Here:</h1>
            <div className="singleDetails">
                <h3>Post ID: {id}</h3>
                <p>Post Title: {title}</p>
                <p>Post Body: {body}</p>
                <Link className="action-btn" onClick={handleGoBack}>Go Back</Link>
            </div>
        </div>
    );
};

export default SinglePost;