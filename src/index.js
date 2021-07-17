import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter, /*Route, Switch */ } from "react-router-dom";
import Mainpage from './Mainpage'
import Loginpage from './Loginpage';
import Spreadoperator from './Spreadoperator';



ReactDOM.render(
  <BrowserRouter>
  <App/>

  <Spreadoperator/>
  
  </BrowserRouter>,
  document.getElementById('root')
);


