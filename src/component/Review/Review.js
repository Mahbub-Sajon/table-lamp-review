import React from 'react';

const Review = (props) => {
    const {name, img, ratings, opinion} = props.review;
    return (
        <div>
            <h1>Name: {name}</h1>
            <img src={img} alt="" />
            <h4>Ratings: {ratings}</h4>
            <p>Review of the customer: {opinion}</p>

        </div>
    );
};

export default Review;