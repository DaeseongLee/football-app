import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.module.css';
import styles from './app.module.css';
import Login from './components/login/login';
import Register from './components/register/register';
import List from './components/meetingList/list';

function App({ authentication }) {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login authentication={authentication} />
          </Route>
          <Route exact path='/register'>
            <Register authentication={authentication} />
          </Route>
          <Route exact path='/list'>
            <List />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
