import React from 'react';

const MoreReviewCart = ({rev}) => {
    const { name, img, review, rateing
    } = rev;
    console.log(name)
    return (
        <div className='cart'>
            <p className='review'><small>{review}</small></p>
            <p className='name'>--{name}</p>
            <p className='rateing'><small>Rateing:  {rateing}</small></p>
            <img className='img' src={img} alt="" />
        </div>
    );
};

export default MoreReviewCart;