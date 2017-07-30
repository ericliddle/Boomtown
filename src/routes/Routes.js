import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Login from '../containers/Login';
import Items from '../containers/Items';
import Profile from '../containers/Profile';
import Share from '../containers/Shared';
import NotFound from '../containers/NotFound';
import Register from '../containers/Register';


const Routes = () => (
    <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Items} />
        <PrivateRoute path="/profile/:id" component={Profile} />
        <PrivateRoute path="/share" component={Share} />
        <PrivateRoute path="/notfound" component={NotFound} />
        <PrivateRoute path="/register" component={Register} />
    </Switch>
);

export default Routes;
