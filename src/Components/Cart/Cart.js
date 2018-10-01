import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getTotal, getCartProducts } from '../../store/reducers/index';
// import { removeFromCart } from '../../store/actions/index';
import * as actions from '../../store/actions/index';
// import { Redirect } from 'react-router-dom';
import CartTable from './CartTable/CartTable';
// import Aux from '../../hoc/Aux/Aux';
// import Modal from '../UI/Modal/Modal';
import {Toggle} from 'Utilities';
import {Modal} from 'Elements';

class Cart extends Component {
    state = { modal: true }

    // componentDidMount() {
    //     const { state = {} } = this.props.location;
    //     const { modal } = state;
    //     this.setState({
    //         modal
    //     })
    // }

    // handleClose = () => {
    //     this.setState({ modal: false });
    // }

    // removeHandler = () => {
    //     console.log("button was clicked")
    // }


    render() {
        // if (this.state.modal === false ) {
        //     return <Redirect to="/" />
        // }
        
        let clickedCart = null
        if (Math.floor(this.props.total) === 0) {
            
            clickedCart = (
                <div>
                    <h1>There are currently no items in your cart</h1>
                </div>
            )
        } else {
            clickedCart = <CartTable 
                cartItems={this.props.cartItems}
                remove={this.props.onItemRemoved}
                total={this.props.total}
            />
                }

        return (
            <Toggle>
            {({on, toggle}) => (
                <Fragment>
                <Modal on={!on} toggle={toggle}>
                    {clickedCart}
                </Modal>
            </Fragment>
            )}
        </Toggle>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartItems: getCartProducts(state),
        total: getTotal(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onItemRemoved: (productId) => dispatch(actions.removeFromCart(productId))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Cart);
