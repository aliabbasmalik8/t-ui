import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import indexRoutes from 'routes/index';
import './styles.scss';
import {UserProvider} from 'context/user'

ReactDOM.render(
  <UserProvider>
    <Router>
      <Switch>
        {indexRoutes.map(prop => (
          <Route path={prop.path} component={prop.component} key={prop.path} />
        ))}
      </Switch>
    </Router>
  </UserProvider>,
  document.getElementById('root'),
);
