import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './Components/Shop/shop'
import Home from './Components/Layout/Home'
import Orders from './Components/Orders/Orders'
import Inventory from './Components/Inventory/Inventory'
import Login from './Components/Login/Login'
import productLoader from './Loader/CartProductsLoader';
import CheckOut from './Components/CheckOut/CheckOut';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Components/Provider/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: productLoader
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'checkOut',
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
)
