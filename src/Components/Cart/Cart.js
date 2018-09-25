import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTotal, getCartProducts } from '../../store/reducers/index';
import { removeFromCart } from '../../store/actions/index';
import { Redirect } from 'react-router-dom';
import CartTable from './CartTable/CartTable';
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

    // removeHandler = () => {
    //     console.log("button was clicked")
    // }


    render() {
        if (this.state.modal === false ) {
            return <Redirect to="/" />
        }
        
        let clickedCart = null
        if (this.props.cartItems.length === 0) {
            clickedCart = (
                <div>
                    <h1>There are currently no items in your cart</h1>
                </div>
            )
        } else {
            clickedCart = <CartTable 
                cartItems={this.props.cartItems}
                remove={removeFromCart}
                total={this.props.total}
            />
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
        cartItems: getCartProducts(state),
        total: getTotal(state)
    }
}



export default connect(mapStateToProps, { removeFromCart })(Cart);
