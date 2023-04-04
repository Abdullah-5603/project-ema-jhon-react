import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product, handleDeleteFromCart}) => {
    const {img, name, quantity, price, id} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-item-info'>
                <div>
                    <p className='name'>{name}</p>
                    <p>quantity: <span>{quantity}</span></p>
                    <p>Price: <span>{price} $</span></p>
                </div>
                <button onClick={() => handleDeleteFromCart(id)}  >
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default ReviewItem;