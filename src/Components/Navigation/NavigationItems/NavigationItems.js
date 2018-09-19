import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Products</NavigationItem>
        <NavigationItem link="/about">About</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
        <NavigationItem link="/cart">Cart</NavigationItem>

        {/* only show the add show link if User is authenticated */}
        { props.isAuthenticated 
            ? <NavigationItem link="/add-product">Add Product</NavigationItem> 
            : null 
        } 

        {/* //if user is NOT authenticated, then show LOGIN, otherwise show LOGOUT */}
        { props.isAuthenticated 
            ? <NavigationItem link="/logout">Logout</NavigationItem>
            : null
        }  
    </ul>
);

export default navigationItems;