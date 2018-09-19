import React from 'react';
import classes from './Header.css'

import NavigationItems from '../NavigationItems/NavigationItems';

const header = (props) => (
    <header className={classes.Header}>
        <nav>
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default header;