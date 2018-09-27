import axios from '../../axios-firebase';
import * as actionTypes from './actionTypes';


export const addToCartUnsafe = productId => (
    {
    type: actionTypes.ADD_TO_CART,
    productId
})

export const removeFromCartUnsafe = productId => (
    {
        type: actionTypes.REMOVE_FROM_CART,
        productId
    }
)

export const deleteFromCart = productId => (
    {
        type: actionTypes.DELETE_FROM_CART,
        productId
    }
)

export const removeFromCart = productId => (dispatch, getState) => {
    if (getState().cart.quantityById[productId] > 0 ) {
        dispatch(removeFromCartUnsafe(productId))
    // } else {
    //     dispatch(deleteFromCart(productId))
    }
}

export const addToCart = productId => (dispatch, getState) => {
    if (+getState().products.products.filter(product => product.id === productId)[0].inventory > 0) {
        dispatch(addToCartUnsafe(productId))
    }
}

