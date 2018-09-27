import { ADD_TO_CART, REMOVE_FROM_CART, DELETE_FROM_CART } from '../actions/actionTypes';

const initialState = {
    addedIds: [],
    quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.indexOf(action.productId) !== -1) {
                return state;
            }
            return [ ...state, action.productId]
        case DELETE_FROM_CART:
            let productId = action.productId
            return {...state.filter(item => item !== productId)}
        default: return state
    }
}

const quantityById = (state = initialState.quantityById, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let { productId } = action;
            return { ...state, 
                [productId]: (state[productId] || 0 ) + 1
            }
        case REMOVE_FROM_CART:
              productId  = action.productId
        return { ...state,
            [productId]: (state[productId] || 0 ) - 1
        }
        case DELETE_FROM_CART:
              productId = action.productId
              delete state[productId]
            return { ...state,
            }
        default: 
            return state;
    }
}

export const getQuantity = (state, productId) => {
    return state.quantityById[productId] || 0
}

export const getAddedIds = state => state.addedIds


const cart = (state = initialState, action) => {
    switch (action.type) {
        default:
        return {
            addedIds: addedIds(state.addedIds, action),
            quantityById: quantityById(state.quantityById, action)
        }
    }
}

export default cart;