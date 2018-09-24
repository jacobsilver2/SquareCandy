import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import Header from '../../Components/Navigation/Header/Header';
import classes from './Layout.css'

class Layout extends Component {

    render() {
        return (
            <Aux>
                <Header isAuth={this.props.isAuthenticated} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null //if state.auth.token is not null, the user is authenticated.
    }
}

export default connect(mapStateToProps)(Layout);

