"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './src/Main';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from "./src/redux/store/configureStore";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'roboto-fontface';
 
// если необходимо, вид сборки можно проверить в коде:
// if (process.env.NODE_ENV === 'production') {
// if (process.env.NODE_ENV !== 'production') {

const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>
), document.getElementById('container'));

