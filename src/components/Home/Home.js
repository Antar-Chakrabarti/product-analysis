import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hook/useReview';
import ReviewCart from '../ReviewCart/ReviewCart';
import './Home.css';

const Home = () => {
    const [reviews, setReview] = useReview();
    return (
        <div className='home-area'>
            <div className="top-home-area">
                <div className="text-area">
                    <h2 className='header'>This is the best Sofa <br /> <span>You have ever seen!</span></h2>
                    <p>If you want to buy a sofa set. Then you came to the right place. It will make home beautiful. So Buy it...</p>
                    <button>Live Demo</button>
                </div>
                <div className="img-area">
                    <img src='https://static.rcwilley.com/products/111399432/Gavin-Contemporary-Stone-Gray-7-Piece-Living-Room-Set-rcwilley-image1~800.jpg?r=18' alt="" />
                </div>
            </div>
            <div className="customar-review-area">
                <h2 className='review'>Customar review</h2>
                <div className="cart-review">
                    {
                        reviews.slice(0, 3).map(rev => <ReviewCart reviews={rev} key={rev.id} />)
                    }
                </div>
            </div>
            <div className="see-all-btn">
                <Link to='/reviews'>See All Reviews</Link>
            </div>
        </div>
    );
};

export default Home;