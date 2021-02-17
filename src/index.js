import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Authentication from './service/Authentication';
import { BrowserRouter as Router } from 'react-router-dom';
const authentication = new Authentication();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App authentication={authentication} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
