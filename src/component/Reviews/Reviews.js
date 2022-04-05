import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h1 className='text-3xl font-bold pb-4 text-lime-800'>Our Happy Customers Say</h1>
            <div className='grid md:grid-cols-3 mb-10 gap-6'> {
                reviews.map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>)
            }</div>
        </div>
    );
};

export default Reviews;