import React from 'react';
import {
  Route,
  Redirect
} from 'react-router';

const PrivateRoutes = ({ component: Component, reduxProps, ...rest }) => {
  // Change to using session
  const storage = true; // localStorage.getItem('userToken');

  return (
    <Route
      {...rest}
      render={(props) =>
        storage ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoutes;