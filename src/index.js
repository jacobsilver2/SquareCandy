//! ────────────────────────────────────────────────────────────────────────────────
//! Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//! ────────────────────────────────────────────────────────────────────────────────
//! CSS
import './index.css';

//! ────────────────────────────────────────────────────────────────────────────────
//! Components
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//! ────────────────────────────────────────────────────────────────────────────────
//! Reducers


//? Combine Reducers

//? Setup Redux Devtools

//? Create Redux Store With Thunk Middleware

//? Get The App Going

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
