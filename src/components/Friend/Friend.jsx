import React from 'react';
import './Friend.css';
import {Link} from 'react-router-dom'

const Friend = (props) => {
    const {id, name, email, website} = props.friend;
    return (
        <div className='friendDiv'>
            <div>
                <h4 className='id color'>Friend ID: {id}</h4>
                <h5 className='title color'>Friend Name: {name}</h5>
            </div>
            <div className='mid-div'>
                <p className='info'>Email: {email}</p>
                <p className='info'>Website: {website}</p>
            </div>
            <Link className='action-btn' to={`/friend/${id}`}>Show the Details</Link>
        </div>
    );
};

export default Friend;