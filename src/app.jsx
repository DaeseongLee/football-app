import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.module.css';
import styles from './app.module.css';
import Login from './components/login/login';
import Register from './components/register/register';
import List from './components/meetingList/list';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
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
