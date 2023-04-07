import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Friend from '../Friend/Friend';
import './Friends.css';

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h2 className='single-title'>Total Friend: {friends.length}</h2>
            <div className="all-friend">
                {
                    friends.map(friend => <Friend
                        key={friend.id}
                        friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;