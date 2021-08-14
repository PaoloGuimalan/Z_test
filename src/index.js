import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SidePanel from './sidepanel.js';
import Main from './main_content.js';
import Databases from './databases_list.js';
import Inputs from './inputs.js';
import Login from './login.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';  

ReactDOM.render(
  <div id='div_in'>
    <Login/>
  </div>,
  document.getElementById('root')
);

