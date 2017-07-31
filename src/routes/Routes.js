import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Login from '../containers/Login';
import Items from '../containers/Items';
import Profile from '../containers/Profile';
import Share from '../containers/Share';
import NotFound from '../containers/NotFound';
import Register from '../containers/Register';


const Routes = () => (
    <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Items} />
        <PrivateRoute path="/profile/:id" component={Profile} />
        <Route path="/share" component={Share} />
        <Route path="/notfound" component={NotFound} />
        {/* TODO: Change register route to privateroute */}
        <Route path="/register" component={Register} />
        {/* <PrivateRoute path="/register" component={Register} /> */}
    </Switch>
);

export default Routes;
