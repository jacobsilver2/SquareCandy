import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.navigationItems}>
        <NavigationItem link="/about">About</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
        <NavigationItem link="cart">Cart</NavigationItem>
    </ul>
);

export default navigationItems;