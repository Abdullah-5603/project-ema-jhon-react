import React, { useState } from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleDeleteFromCart = (id) => {
        const remaining = cart.filter(product => product._id !== id)
        setCart(remaining);
        removeFromDb(id);
    }
    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                    handleDeleteFromCart={handleDeleteFromCart}
                    product={product}
                    key={product._id}
                    ></ReviewItem>)
                }            
            </div>
            <div className='cart-container'>
                <OrderSummary 
                clearCart={clearCart}
                cart={cart}>
                <Link className='proceed-link' to='/checkOut'>
                <button className='review-order-btn'>Proceed checkout
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </Link>
                </OrderSummary>
            </div>
        </div>
    );
};

export default Orders;