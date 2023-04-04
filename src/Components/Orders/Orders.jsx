import React, { useState } from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleDeleteFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                    handleDeleteFromCart={handleDeleteFromCart}
                    product={product}
                    key={product.id}
                    ></ReviewItem>)
                }            
            </div>
            <div className='review-cart-container'>
                <OrderSummary cart={cart}></OrderSummary>
            </div>
        </div>
    );
};

export default Orders;