import React from 'react';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <ActiveLink to="/home">Home</ActiveLink>
                <ActiveLink to="/posts">Posts</ActiveLink>
                <ActiveLink to="/about">About</ActiveLink>
                <ActiveLink to="/contact">Contact</ActiveLink>
                <ActiveLink to="/friend">Friend</ActiveLink>
            </nav>
        </div>
    );
};

export default Header;