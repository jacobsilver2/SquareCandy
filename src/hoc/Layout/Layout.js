import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Header from '../../Components/Navigation/Header/Header';
import classes from './Layout.css'

class Layout extends Component {

    render() {
        const {isAuthenticated, cartQuantity, total} = this.props
        return (
            <Aux>
                <Header isAuth={isAuthenticated} cartQuantity={cartQuantity} total={total}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}


export default Layout;

