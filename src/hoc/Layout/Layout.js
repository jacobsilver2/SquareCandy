import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import Header from '../../Components/Navigation/Header/Header';
import { getTotal, getCartProducts } from '../../store/reducers/index';
import classes from './Layout.css'

class Layout extends Component {

    render() {
        return (
            <Aux>
                <Header isAuth={this.props.isAuthenticated} cart={this.props.cart} total={this.props.total}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null, //if state.auth.token is not null, the user is authenticated.
        cart: getCartProducts(state).reduce((acc, item) => acc + item.quantity, 0),
        total: getTotal(state)
    }
}
export default connect(mapStateToProps)(Layout);

