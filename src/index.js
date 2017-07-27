import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
// import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import * as firebase from 'firebase';
import { FirebaseAuth } from './config/firebase';

import client from './config/apolloClient';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import muiTheme from './config/theme';
import store from './redux/store';
import Routes from './routes';
import Layout from './components/Layout';
import { updateAuthState } from './redux/modules/auth';


const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <ApolloProvider client={client} store={store}>
            <Layout>
                <Router>
                    <Routes />
                </Router>
            </Layout>
        </ApolloProvider>
    </MuiThemeProvider>

);

FirebaseAuth.onAuthStateChanged(userProfile => {
    if (userProfile) {
        store.dispatch(updateAuthState(userProfile.uid));
    } else {
        store.dispatch(updateAuthState(false));
    }
});

injectTapEventPlugin();

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
