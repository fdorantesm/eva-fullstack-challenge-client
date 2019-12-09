import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NotFound from '../pages/errors/NotFound';
import Explorations from '../pages/admin/explorations/Explorations';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import {createBrowserHistory} from 'history';

const AppRouter = () => (
    <Router history={createBrowserHistory()}>
        <div>
            <Switch>
                <PublicRoute path='/' component={Login} exact={true} />
                <PublicRoute path='/register' component={Register} exact={true} />
                <PrivateRoute path='/admin/explorations' component={Explorations} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;