import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTotal, getCartProducts } from '../../store/reducers/index';
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
        console.log(this.props.products)

        const clickedCart = (
            <div onClick={this.handleClose}>
                <h1>{this.props.products[0]}</h1>
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
        products: getCartProducts(state),
        total: getTotal(state)
    }
}

export default connect(mapStateToProps)(Cart);
