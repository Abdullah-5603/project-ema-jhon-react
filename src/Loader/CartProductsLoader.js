import { getShoppingCart } from "../utilities/fakedb";

const productLoader = async () => {
    const loadedProducts = await fetch('http://localhost:3000/products')
    const products = await loadedProducts.json();

    const storedCart = getShoppingCart();
    let savedCart = [];

    for(const id in storedCart){
        const addedProduct = products.find(product => product._id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    return savedCart;

}
export default productLoader;