import React from 'react';
import {
  Route,
  Redirect
} from 'react-router';

const PrivateRoutes = ({ component: Component, reduxProps, ...rest }) => {
  const storage = localStorage.getItem('userToken');

  const {
    ...props
  } = props;

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