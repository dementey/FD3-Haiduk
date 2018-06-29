"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import IShop from './components/ishop';

let shopText = 'ishop (интернет-магазин)';
let titleHash = require('./theadtable.json');
let productsArr = require('./products.json');

ReactDOM.render(
  <IShop
    shop={shopText}
    products={productsArr}
    title={titleHash} />,
  document.getElementById('container')
);