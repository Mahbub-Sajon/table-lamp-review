import React from 'react';

const HomeReview = (props) => {
    const {name, img, ratings, opinion} = props.review;
    return (
        <div className='border-2 border-lime-800 rounded-lg p-2'>
            <img className='w-full h-80 rounded-lg' src={img} alt="" />
            <h1> <span className='font-bold text-lime-800'>Name:</span>  {name}</h1>
            <h4> <span className='font-bold text-lime-800'>Ratings:</span> {ratings}</h4>
            <p><span className='font-bold text-lime-800'>Review of the customer:</span> {opinion}</p>
        </div>
    );
};

export default HomeReview;