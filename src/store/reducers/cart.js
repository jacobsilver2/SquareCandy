import { ADD_TO_CART } from '../actions/actionTypes';

const initialState = {
    addedIds: [],
    quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
    console.log("made it to addedIds")
    switch (action.type) {
        case ADD_TO_CART:
            if (state.indexOf(action.productId) !== -1) {
                return state;
            }
            return [ ...state, action.productId]
            default: return state
    }
}

const quantityById = (state = initialState.quantityById, action) => {
    console.log("made it to quantityById")
    switch (action.type) {
        case ADD_TO_CART:
            const { productId } = action;
            return { ...state, 
                [productId]: (state[productId] || 0 ) + 1
            }
        default: 
            return state;
    }
}

export const getQuantity = (state, productId) => {
    console.log('made it here')
    return state.quantityById[productId] || 0
}

export const getAddedIds = state => state.addedIds


const cart = (state = initialState, action) => {
    console.log("made it to cart")
    switch (action.type) {
        default:
        return {
            addedIds: addedIds(state.addedIds, action),
            quantityById: quantityById(state.quantityById, action)
        }
    }
}

export default cart;