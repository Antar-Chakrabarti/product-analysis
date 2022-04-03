import React from 'react';
import './ReviewCart.css';

const ReviewCart = ({ reviews }) => {
    const { name, img, review, rateing
} = reviews;
    console.log(name)
    return (
        <div className='cart'>
            <p className='review'><small>{review}</small></p>
            <p className='name'>--{name}</p>
            <p className='rateing'><small>{rateing}</small></p>
            <img className='img' src={img} alt="" />
        </div>
    );
};

export default ReviewCart;