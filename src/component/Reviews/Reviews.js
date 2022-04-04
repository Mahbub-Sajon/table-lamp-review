import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';


const Reviews = () => {
    const [users, setUsers] =useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setUsers(data));
    },[])
    return (
        <div>
            <h1>This is reviews</h1>
            {
                users.map(user => <Review
                key = {user.id}
                user = {user}
                
                ></Review>)
            }
        </div>
    );
};

export default Reviews;