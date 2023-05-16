import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import OrderSummary from '../OrderSummary/OrderSummary'
import './shop.css'
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(9)
    const { totalProducts } = useLoaderData();

    const totalPages = Math.ceil(totalProducts / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()];

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        let savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }

        }
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (product) => {
        let newCart = [];
        const exists = cart.find(pd => pd._id === product._id)
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd._id !== product._id);
            newCart = [...remaining, product];
        }

        // const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product._id)
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const renderProducts = () => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentPageProducts = products.slice(startIndex, endIndex);
        return currentPageProducts.map(product => (
            <Product
                product={product}
                key={product._id}
                handleAddToCart={handleAddToCart}
            />
        ));
    };

    return (
        <>
            <div className='shop-container'>
                <div className='products-container'>
                    {renderProducts()}
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
            <div className='pagination'>
                    {
                        pageNumbers.map(number => (
                            <button
                                key={number}
                                onClick={() => setCurrentPage(number)}
                            >
                                {number}
                            </button>
                            
                        ))
                    }
            </div>
        </>
    );
};

export default Shop;
