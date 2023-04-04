import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import OrderSummary from '../OrderSummary/OrderSummary'
import './shop.css'
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Shop = () => {
    // const{name, quantity} = getShoppingCart;
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    useEffect(() =>{
        const storedCart = getShoppingCart();
        let savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }

        }
        setCart(savedCart)
    } ,[products])

    const handleAddToCart = (product) => {
        let newCart = [];
        const exists = cart.find( pd => pd.id === product.id)
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product];
        } else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, product];
        }

        // const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
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
                <OrderSummary 
                cart={cart} clearCart={clearCart}
                >
                <Link className='proceed-link' to='/orders'>
                <button className='review-order-btn'>Review Order 
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </Link>
                </OrderSummary>
            </div>
        </div>
    );
};

export default Shop;