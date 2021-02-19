import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './app';
import Authentication from './service/Authentication';
import 'bootstrap/dist/css/bootstrap.min.css';
const authentication = new Authentication();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App authentication={authentication} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
