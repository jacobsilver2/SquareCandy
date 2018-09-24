import React from 'react';
import classes from './Header.css'

import NavigationItems from '../NavigationItems/NavigationItems';

const header = ({isAuth, cart, total}) => (
    <header className={classes.Header}>
        <nav>
            <NavigationItems isAuthenticated={isAuth} cart={cart} total={total}/>
        </nav>
    </header>
);

export default header;