import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Login from './Login';

class LoginContainer extends Component {

    static propTypes = {
    };

    login = () => {
        console.log('You clicked the login button.'); // TODO remove console.log when login button is complete
    }

    render() {
        return (
            <Login login={this.login} />
        );
    }
}

export default LoginContainer;
