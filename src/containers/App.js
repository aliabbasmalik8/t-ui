import React, { Suspense, useEffect, useContext } from 'react';
import { Switch, withRouter,useHistory } from 'react-router-dom';
import appRoutes from 'routes/routes';
import RouteWrapper from 'components/PrivtaeRoute';
import ErrorBoundary from 'components/ErrorBoundary';
import Header from 'components/Header/index';
import {UserContext} from 'context/user'

import {userApi} from 'api/auth'

function App() {
  const history = useHistory()
  const { setUser, user } = useContext(UserContext);
  
  useEffect(() => {
    if (localStorage.getItem('taskerToken')) {
      userApi(setUser);
    }
  }, [])

  useEffect(() => {
    if(user){
      user.token && localStorage.setItem('taskerToken', user.token)
      history.push('/dashboard')
    }
  }, [user]);

  const swithRoutes = (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {appRoutes.map(route => (
          <RouteWrapper
            path={route.path}
            component={route.component}
            isPrivate={route.isPrivate}
            exact={route.exact}
            key={route.path}
          />
        ))}
      </Switch>
    </Suspense>
  );
  return (
    <ErrorBoundary>
      <Header />
      {swithRoutes}
    </ErrorBoundary>
  );
}

export default withRouter(App);
