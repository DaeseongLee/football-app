import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './app.module.css';
import styles from './app.module.css';
import Login from './components/login/login';
import Register from './components/register/register';
import List from './components/meetingList/list';

function App({ authentication }) {
  const history = useHistory();

  useEffect(() => {
    authentication.onAuthChange(user => {
      console.log(user);
      const { displayName, email, photoURL } = user;
      if (user) {
        history.push({
          pathname: '/list',
          state: { displayName, email, photoURL }
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
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register authentication={authentication} />
        </Route>
        <Route exact path='/list'>
          <List />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
