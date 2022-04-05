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
            <h1 className='text-lime-800 text-3xl font-bold pb-4'>Customer Review (3)</h1>
           <div className='grid md:grid-cols-3 mb-10 gap-6'>
           {
                reviews.slice(0,3).map(review => <HomeReview
                key = {review.id}
                review = {review}
                ></HomeReview>)
            }
           </div>
             <Link className='bg-lime-200 font-bold p-4 w-60 rounded-lg text-lime-700' to="/reviews"> See All Reviews</Link>
        </div>
    );
};

export default Home;