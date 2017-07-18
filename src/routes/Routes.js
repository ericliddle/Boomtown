import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import Login from '../containers/Login';
import Items from '../containers/Items';
import Profile from '../containers/Profile';
import Share from '../containers/Shared';
import NotFound from '../containers/NotFound';


const Routes = () => (
    <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Items} />
        {/* <Route path="/profile" component={Profile} />  */}
        <Route path="/profile/:id" component={Profile} />
        <Route path="/share" component={Share} />
        <Route path="/notfound" componen={NotFound} />
    </Switch>
);

export default Routes;
