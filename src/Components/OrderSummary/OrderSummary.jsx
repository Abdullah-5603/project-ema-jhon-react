import React from 'react';
// import { deleteShoppingCart, priceCalculator } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import './OrderSummary.css'

const OrderSummary = ({cart}) => {
    // const totalPrices = cart.map(product => product.price);
    // const shippingCharges = cart.map(product => product.shipping);
    // const totalShippingCharge = priceCalculator(shippingCharges);
    // const totalPrice = priceCalculator(totalPrices);
    // const tax = totalPrice * 0.02;
    // const grandTotal = totalPrice + totalShippingCharge + tax);

    let totalPrice = 0;
    let totalShippingCharge = 0;
    let quantity = 0;
    for(const product of cart){
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShippingCharge = totalShippingCharge + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 2 / 100;
    const grandTotal = tax + totalPrice + totalShippingCharge;

    return (
        <div className='order-container'>
            <h4 className='order-summary'>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: {totalPrice}$</p>
            <p>Total Shipping Charges: {totalShippingCharge}$</p>
            <p>Tax: {tax.toFixed(2)}$</p>
            <h4>Grand Total: {grandTotal.toFixed(2)}$</h4>
            <div className='btns'>
                <button className='clear-cart-btn'>Clear Cart <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                <button className='review-order-btn'>Review Order 
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default OrderSummary;