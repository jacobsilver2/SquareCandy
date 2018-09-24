//! Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { getProducts } from './store/actions/index'

//! CSS
import './index.css';

//! Components
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//! Reducers
import reducer from './store/reducers/index';

// import productsReducer from './store/reducers/products';
// import authReducer from './store/reducers/auth';
// import cart from './store/reducers/cart';
// import cartProducts from './store/reducers';

//? Combine Reducers
// const rootReducer = combineReducers({ products: productsReducer, auth: authReducer, cart: cart, cartProducts: cartProducts });

//? Setup Middleware
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

//? Create Redux Store With Thunk Middleware
const store = createStore(reducer, 
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);
//? Add the products to the redux store
store.dispatch(getProducts());

//? Get The App Going
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

//? Hook App Up To The DOM
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
