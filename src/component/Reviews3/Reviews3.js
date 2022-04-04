import React, { useEffect, useState } from 'react';
import Review3 from '../Review3/Review3';

const Reviews3 = () => {
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
               users.slice(0, 3).map(user => <Review3
               key = {user.id}
               user = {user}
               
               ></Review3>)
           }
               </div>
    );
                };

export default Reviews3;