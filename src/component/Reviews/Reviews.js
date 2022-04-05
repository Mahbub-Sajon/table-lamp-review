import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';


const Reviews = () => {
   const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h1>This is reviews</h1>
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