import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ({isAuthenticated, cart, total}) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Products</NavigationItem>
        <NavigationItem link="/about">About</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
        <NavigationItem link="/cart">Cart (total: ${total}. {cart} items)</NavigationItem>
        <NavigationItem link="/checkout">Checkout</NavigationItem>

        {/* only show the add show link if User is authenticated */}
        { isAuthenticated 
            ? <NavigationItem link="/add-product">Add Product</NavigationItem> 
            : null 
        } 

        {/* //if user is NOT authenticated, then show LOGIN, otherwise show LOGOUT */}
        { isAuthenticated 
            ? <NavigationItem link="/logout">Logout</NavigationItem>
            : null
        }  
    </ul>
);

export default navigationItems;