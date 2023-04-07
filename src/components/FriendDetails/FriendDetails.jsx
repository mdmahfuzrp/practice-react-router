import React from 'react';
import { useLoaderData, useNavigate,  Link} from 'react-router-dom';
import './FriendDetails.css'

const FriendDetails = () => {
    const singleFriend = useLoaderData();
    const {name, phone, website} = singleFriend;
    
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h2 className='compo-title'>Here are friend details</h2>
            <div className="details">
                <p>Name: {name}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
                <Link className="action-btn" onClick={handleGoBack}>Go Back</Link>
            </div>
        </div>
    );
};

export default FriendDetails;