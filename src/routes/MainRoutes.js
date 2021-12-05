import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router';

// ----------- Pages Imports ---------------
import ProjectsDashboard from './Dashboards/Projects';
import ComingSoon from './Pages/ComingSoon';
import Confirmation from './Pages/Confirmation';
import Danger from './Pages/Danger';
import Error404 from './Pages/Error404';
import ForgotPassword from './Pages/ForgotPassword';
import LockScreen from './Pages/LockScreen';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Success from './Pages/Success';
import Timeline from './Pages/Timeline';

const MainRoutes = () => {
  return (
    <Switch>
      <Redirect from="/" to="/dashboards/projects" exact />
      
      <Route path="/dashboards/projects" exact component={ProjectsDashboard} />

      { /*    Pages Routes    */ }
      <Route component={ ComingSoon } path="/pages/coming-soon" />
      <Route component={ Confirmation } path="/pages/confirmation" />
      <Route component={ Danger } path="/pages/danger" />
      <Route component={ ForgotPassword } path="/pages/forgot-password" />
      <Route component={ LockScreen } path="/pages/lock-screen" />
      <Route component={ Login } path="/pages/login" />
      <Route component={ Register } path="/pages/register" />
      <Route component={ Success } path="/pages/success" />
      <Route component={ Timeline } path="/pages/timeline" />

      { /*    404    */ }
      <Route path="/pages/error-404" render={(props) => <Error404 isEmptyLayout={false} {...props} />} />
      <Redirect to="/pages/error-404" />
    </Switch>
  );
}

export default MainRoutes;