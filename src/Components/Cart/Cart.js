import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import classes from './Cart.css';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../UI/Modal/Modal';

class Cart extends Component {
    state = { modal: true }

    componentDidMount() {
        const { state = {} } = this.props.location;
        const { modal } = state;
        this.setState({
            modal
        })
    }

    handleClose = () => {
        this.setState({ modal: false });
    }


    render() {
        if (this.state.modal === false ) {
            return <Redirect to="/" />
        }
        let cartItems = this.props.cart.addedIds[0];

        

        const clickedCart = (
            <div onClick={this.handleClose}>
                <h1>{cartItems}</h1>
            </div>
        )

        return (
            <Aux>
                <Modal show={this.state.modal} modalClosed={this.handleClose}>
                    {clickedCart}
                </Modal>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);
