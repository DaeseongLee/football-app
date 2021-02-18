import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Authentication from './service/Authentication';
const authentication = new Authentication();

ReactDOM.render(
  <React.StrictMode>
    <App authentication={authentication} />
  </React.StrictMode>,
  document.getElementById('root')
);
