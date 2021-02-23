import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './app.module.css';
import styles from './app.module.css';
import Login from './components/login/login';
import Register from './components/register/register';
import List from './components/meetingList/list';

function App({ authentication, database, store }) {
  const history = useHistory();
  useEffect(() => {
    authentication.onAuthChange(user => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;
        const userInfo = {};

        userInfo["displayName"] = displayName;
        userInfo["email"] = email;
        userInfo["photoURL"] = photoURL;
        userInfo["uid"] = uid;

        history.push({
          pathname: '/list',
          state: { "user": userInfo }
        })

      } else {
        history.push('/');
      }
    })
  }, [])
  return (
    <div className={styles.app}>
      <Switch>
        <Route exact path='/'>
          <Login authentication={authentication} />
        </Route>
        <Route exact path='/register'>
          <Register authentication={authentication} />
        </Route>
        <Route exact path='/list'>
          <List authentication={authentication} database={database} store={store} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
