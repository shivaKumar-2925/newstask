import React from 'react';
import ReactDOM from 'react-dom';
import App from './New/App'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


