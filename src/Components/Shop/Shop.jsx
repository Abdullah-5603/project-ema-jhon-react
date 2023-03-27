import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import OrderSummary from '../OrderSummary/OrderSummary'
import './shop.css'

const Shop = () => {
    // const{name, quantity} = getShoppingCart;
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product 
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <OrderSummary cart={cart}></OrderSummary>
            </div>
        </div>
    );
};

export default Shop;