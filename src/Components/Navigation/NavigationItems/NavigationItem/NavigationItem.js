import React, { Component } from 'react';
import classes from './NavigationItem.css';
import { NavLink } from 'react-router-dom';


class NavigationItem extends Component {
    
    render() {
        const {link, children} = this.props
        return (
            <li className={classes.NavigationItem}>
            <NavLink exact to={{pathname:link}} activeClassName={classes.active}>
                {children}
            </NavLink>
        </li>
        );
    }
}

export default NavigationItem;

