import React from 'react';
import useReview from '../../hook/useReview';
import MoreReviewCart from '../MoreReviewCart/MoreReviewCart';
import './Review.css';

const Review = () => {
    const [reviews, setReview] = useReview();
    return (
        <div className='review-container'>
            <div className="more-reviews">
                {
                    reviews.slice(0, 6).map(rev => <MoreReviewCart rev={rev} />)
                }
            </div>
        </div>
    );
};

export default Review;