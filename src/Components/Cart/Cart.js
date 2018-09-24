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
        
        let clickedCart = null
        if (this.props.products.length === 0) {
            clickedCart = (
                <div>
                    <h1>There are currently no items in your cart</h1>
                </div>
            )
        } else {
            clickedCart = (
                <div onClick={this.handleClose}>
                    <table className={classes.tableFill}>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.products.map(product => <tr key={product.name}><td>{product.name}</td><td>{product.quantity}</td><td>${product.price}.00</td></tr>)}
                        </tbody>
                    </table>
                    <h4>Total Price: {this.props.total}</h4>
                </div>
                )
                }

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
