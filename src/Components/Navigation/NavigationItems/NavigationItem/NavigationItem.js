import React, { Component, Fragment } from 'react';
import classes from './NavigationItem.css';
import { NavLink } from 'react-router-dom';
import {Toggle} from 'utilities';
import {Modal} from 'elements';

class NavigationItem extends Component {
    
    render() {
        const {link, children} = this.props
        return (
            <li className={classes.NavigationItem}>
            <NavLink exact to={{pathname:link}} activeClassName={classes.active}>
                {this.props.children}
            </NavLink>
        </li>
        );
    }
}

export default NavigationItem;

