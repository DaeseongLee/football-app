import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './app';
import Authentication from './service/Authentication';
import Database from './service/Database';
import Store from './service/Store';
import 'bootstrap/dist/css/bootstrap.min.css';
const authentication = new Authentication();
const database = new Database();
const store = new Store();
ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <App authentication={authentication} database={database} store={store} />
  </Router>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

