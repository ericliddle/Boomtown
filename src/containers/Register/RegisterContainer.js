import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { FirebaseAuth } from '../../config/firebase';
import Register from './Register';
// import Loader from '../../components/Loader';
import './styles.css';

class RegisterContainer extends Component {
// TODO: screw this stupi dlogin bnutton
    login = ({ email, password }) => {
        FirebaseAuth.signInWithEmailAndPassword(email, password).catch(function (error) {
            console.log(error);
        });
    }

    registerUser = (event) => {
        event.preventDefault();
        this.props.mutate({
            variables: {
                fullname: 'wtf',
                email: 'igivein@nomore.com',
                bio: 'please, no more',
                password: 'password'
            }
        })
            .then(({ data }) => {
                console.log('got data', data);
                this.login({ email: 'igivein@nomore.com', password: 'password' });
            }).catch((error) => {
                console.log('there was an error sending the query', error);
            });
    }

    render() {
        return (
            <div className="RegisterContainer">
                <Register registerUser={(event) => this.registerUser(event)} />
            </div>
        );
    }
}

const addUser = gql`
    mutation addUser (
    $fullname: String!
    $email: String!
    $bio: String
    $password: String!
    ) {
    addUser(
        fullname: $fullname
        email: $email
        bio: $bio
        password: $password
    ) {
        fullname
        email
        bio
    }
    }
`;

const SignUpWithData = graphql(addUser)(RegisterContainer);

export default SignUpWithData;
