import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FirebaseAuth } from '../../config/firebase';
import Login from './Login';
// import { FirebaseAuth, FirebaseDB } from '../../config/auth';
class LoginContainer extends Component {

    static propTypes = {
    };

    login = ({ email, password }) => {

        FirebaseAuth.signInWithEmailAndPassword(email, password)
            .catch((err) => {
                if (err.code === 'auth/user-not-found') {
                    // USER DOES NOT EXIST
                } else {
                    // SHOW LOGIN ERROR
                }
            });
    }

    render() {
        // this.login({ email: 'michaeljackson@gmail.com', password: 'password1234' });
        if (this.props.authenticated) {
            console.log('i dont want to be clicked');
            return (
                <Redirect to={'/'} />
            );
        }

        return (
            <Login
                login={(event) => {
                    event.preventDefault();
                    this.login({ email: 'michaeljackson@gmail.com', password: 'password1234' });
                }}
            />
        );
    }
} console.log('i was clicked');

const mapStateToProps = state => ({
    authenticated: state.auth.userProfile
});

export default connect(mapStateToProps)(LoginContainer);

