import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    products: [],
    error: false
}

const addProductSuccess = (state, action) => {
    const newProduct = updateObject(action.product, {id: action.id});
    return updateObject(state, {
        loading: false,
        products: state.products.concat(newProduct)
    });
};

const editProduct = (state, action) => {
    const productIndex = state.products.findIndex(product => product.id === action.id);
    const products = [...state.products];
    products[productIndex] = {
        ...products[productIndex],
        name: action.product.name,
        price: action.product.price
    };
    return {...state, products}
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_SQUARECANDY_PRODUCT_START: return updateObject(state, { loading: true })
        case actionTypes.ADD_SQUARECANDY_PRODUCT_SUCCESS: return addProductSuccess(state, action)
        case actionTypes.ADD_SQUARECANDY_PRODUCT_FAIL: return updateObject(state, { loading: false })
        
        case actionTypes.REMOVE_SQUARECANDY_PRODUCT_SUCCESS: return { products: state.products.filter(product => product.id !== action.id) };

        case actionTypes.GET_SQUARECANDY_PRODUCTS_START: return updateObject(state, { loading: true })
        case actionTypes.GET_SQUARECANDY_PRODUCTS_SUCCESS: return updateObject(state, { products: action.products, loading: false })
        case actionTypes.GET_SQUARECANDY_PRODUCTS_FAIL: return updateObject(state, { loading: false })

        case actionTypes.EDIT_SQUARECANDY_PRODUCT_SUCCESS: return editProduct(state, action)

        default: return state;
    }
}

export default reducer;