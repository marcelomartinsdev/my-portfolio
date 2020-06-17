import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

