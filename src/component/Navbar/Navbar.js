import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <div>
            <nav className='d-flex'>
                <CustomLink to="/">HOME</CustomLink>
                <CustomLink to="/reviews">REVIEWS</CustomLink>
                <CustomLink to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink to="/blogs">BLOGS</CustomLink>
                <CustomLink to="/about">ABOUT</CustomLink>
            </nav>
        </div>
    );
};

export default Navbar;