import React from 'react';
import { deleteShoppingCart } from '../../utilities/fakedb';
import './OrderSummary.css'

const OrderSummary = () => {
    return (
        <div className='order-container'>
            <h4 className='order-summary'>Order Summary</h4>
            <p>Selected Items: </p>
            <p>Total price: </p>
            <p>Total Shopping Charges: </p>
            <p>Tax: </p>
            <h4>Grand Total: </h4>
            <div className='btns'>
                <button onClick={deleteShoppingCart} className='clear-cart-btn'>Clear Cart</button>
                <button className='review-order-btn'>Review Order</button>
            </div>
        </div>
    );
};

export default OrderSummary;