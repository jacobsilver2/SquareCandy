import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import Header from '../../Components/Navigation/Header/Header';
import classes from './Layout.css'

class Layout extends Component {
    state = {  }
    render() {
        return (
            <Aux>
                <Header />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;

