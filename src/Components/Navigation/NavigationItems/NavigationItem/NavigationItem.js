import React, { Component } from 'react';
import classes from './NavigationItem.css';
import { NavLink } from 'react-router-dom';

class NavigationItem extends Component {
    
    render() {
        return (
            <li className={classes.NavigationItem}>
            <NavLink exact to={{pathname:this.props.link, state: { modal: true }}} activeClassName={classes.active}>
                {this.props.children}
            </NavLink>
        </li>
        );
    }
}

export default NavigationItem;

