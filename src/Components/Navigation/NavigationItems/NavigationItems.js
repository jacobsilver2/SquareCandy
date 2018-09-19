import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Products</NavigationItem>
        <NavigationItem link="/about">About</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
        <NavigationItem link="/cart">Cart</NavigationItem>
        <NavigationItem link="/add-product">Add Product</NavigationItem>
    </ul>
);

export default navigationItems;