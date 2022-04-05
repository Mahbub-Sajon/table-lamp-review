import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';


const Reviews = () => {
   const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h1>Our Happy Customers Say</h1>
            {
                reviews.map(review => <Review
                key = {review.id}
                review = {review} 
                ></Review>)
            }
        </div>
    );
};

export default Reviews;