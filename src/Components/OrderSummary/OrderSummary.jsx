import React from 'react';
import { GrandTotal, priceCalculator } from '../../utilities/fakedb';
// import { deleteShoppingCart } from '../../utilities/fakedb';
import './OrderSummary.css'

const OrderSummary = (props) => {
    const totalPrices = props.cart.map(product => product.price);
    const shippingCharges = props.cart.map(product => product.shipping);
    const totalShippingCharge = priceCalculator(shippingCharges);
    const totalPrice = priceCalculator(totalPrices);
    const tax = totalPrice * 0.02;
    const grandTotal = GrandTotal(totalPrice, totalShippingCharge, tax);

    return (
        <div className='order-container'>
            <h4 className='order-summary'>Order Summary</h4>
            <p>Selected Items: {props.cart.length}</p>
            <p>Total price: {totalPrice}</p>
            <p>Total Shipping Charges: {totalShippingCharge}</p>
            <p>Tax: {tax}</p>
            <h4>Grand Total: {grandTotal}</h4>
            <div className='btns'>
                <button className='clear-cart-btn'>Clear Cart</button>
                <button className='review-order-btn'>Review Order</button>
            </div>
        </div>
    );
};

export default OrderSummary;