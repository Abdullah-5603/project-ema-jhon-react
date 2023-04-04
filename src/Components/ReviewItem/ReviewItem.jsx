import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product, handleDeleteFromCart}) => {
    const {img, name, quantity, price, id} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-item-info ms-2'>
                <div>
                    <h5>{name}</h5>
                    <p>quantity: <span className='text-warning'>{quantity}</span></p>
                    <p>Price: <span className='text-warning'>{price} $</span></p>
                </div>
                <button onClick={() => handleDeleteFromCart(id)}  
                className='me-1 p-2 bg-danger border rounded text-white'>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default ReviewItem;