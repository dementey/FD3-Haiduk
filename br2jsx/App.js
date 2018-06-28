"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Br2jsx from './components/br2jsx';

let textJSON = require('./text.json');

ReactDOM.render(
  <Br2jsx
    text={textJSON} />,
  document.getElementById('container')
);