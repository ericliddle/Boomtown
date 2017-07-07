import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Login from '../containers/Login';
// import Items from '../containers/Items';
// import Profile from '../containers/Profile';
// import Share from '../containers/Share';


const Routes = () => (

    <Route path="/login" component={Login} />
    // <Route exact path="/" component={Items} />
    // <Route exact path="/profile/:id" component={Profile} />
    // <Route path="/share" component={Share} />
    // <Route path="/NotFound" componen={NotFound} />

);

export default Routes;
