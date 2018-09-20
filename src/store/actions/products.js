import axios from '../../axios-firebase';
import * as actionTypes from './actionTypes';
// import { storage } from '../../firebase';

export const getProductsStart = () => {
    return {
        type: actionTypes.GET_SQUARECANDY_PRODUCTS_START,
    }
}

export const getProductsSuccess = (products) => {
    return {
        type: actionTypes.GET_SQUARECANDY_PRODUCTS_SUCCESS,
        products
    }
} 

export const getProductsFail = (error) => {
    return {
        type: actionTypes.GET_SQUARECANDY_PRODUCTS_FAIL,
        error
    }
}

export const addProductStart = () => {
    return {
        type: actionTypes.ADD_SQUARECANDY_PRODUCT_START
    }
}

export const addProductSuccess = (id, product) => {
    return {
        type: actionTypes.ADD_SQUARECANDY_PRODUCT_SUCCESS,
        id,
        product
    }
}

export const addProductFail = (error) => {
    return {
        type: actionTypes.ADD_SQUARECANDY_PRODUCT_FAIL,
        error: error
    }
}

export const removeProduct = (id) => {
    return {
        type: actionTypes.REMOVE_SQUARECANDY_PRODUCT_SUCCESS,
        id
    }
}

export const updateProduct = (id, product) => {
    return {
        type: actionTypes.EDIT_SQUARECANDY_PRODUCT_SUCCESS,
        id,
        product
    }
}

//! ────────────────────────────────────────────────────────────────── I ──────────
//!   :::::: A S Y N C   A C T I O N S : :  :   :    :     :        :          :
//! ────────────────────────────────────────────────────────────────────────────


export const addProduct = (productData, token) => {
    return dispatch => {
        dispatch(addProductStart());
        axios.post('/products.json?auth=' + token, productData)
        .then(resp => {
            dispatch(addProductSuccess(resp.data.name, productData))
        })
        .catch(error => {
            dispatch(addProductFail(error))
        })

    }
}

export const getProducts = () => {
    return dispatch => {
        dispatch(getProductsStart());
        axios.get('/products.json')
        .then(res => {
            const fetchedProducts = [];
            for (let key in res.data) {
                fetchedProducts.push({
                    ...res.data[key],
                    id: key
                });
            }
            dispatch(getProductsSuccess(fetchedProducts))
        })
        .catch(err => {
            dispatch(getProductsFail(err))
        })
    }
}

export const deleteProduct = (productId, token) => {
    return dispatch => {
        axios.delete(`/products/${productId}.json?auth=${token}`)
        .then(res => {
            dispatch(removeProduct(productId))
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const editProduct = (id, productData, token) => {
    return dispatch => {
        axios.patch(`/products/${id}.json?auth=${token}`, productData)
        .then(res => {
            dispatch(updateProduct(id, productData))
        })
        .catch(err => {
            console.log(err)
        })
    }
}
