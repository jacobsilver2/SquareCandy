import axios from '../../axios-firebase';
import * as actionTypes from './actionTypes';


export const addToCartUnsafe = productId => (
    {
    type: actionTypes.ADD_TO_CART,
    productId
})

export const addToCart = productId => (dispatch, getState) => {
    if (+getState().products.products.filter(product => product.id === productId)[0].inventory > 0) {
        dispatch(addToCartUnsafe(productId))
    }
}