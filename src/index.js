//! Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//! CSS
import './index.css';

//! Components
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//! Reducers
import productsReducer from './store/reducers/products';
import authReducer from './store/reducers/auth';

//? Combine Reducers
const rootReducer = combineReducers({ products: productsReducer, auth: authReducer });

//? Setup Redux Devtools
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

//? Create Redux Store With Thunk Middleware
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

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
