import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth._id
});

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
  }) => (
      <Route {...rest} component={(props) => (
        isAuthenticated ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
            <Redirect to='/' />
          )
      )} />
    );
  
export default connect(mapStateToProps)(PrivateRoute);
