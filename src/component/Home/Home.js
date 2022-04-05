import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Header from '../Header/Header';
import HomeReview from '../HomeReview/HomeReview';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
             <Header></Header>
            <h1>Customer Review (3)</h1>
            {
                reviews.slice(0,3).map(review => <HomeReview
                key = {review.id}
                review = {review}
                
                
                ></HomeReview>)
            }
             <Link to="/reviews"> See All Reviews</Link>
        </div>
    );
};

export default Home;