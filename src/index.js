import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
// import Login from './containers/Login';
// import Items from './containers/Items';
// import Shared from './containers/Shared';
// import NotFound from './containers/NotFound';
// import Profile from './containers/Profile';

injectTapEventPlugin();

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        {/* <Layout>
            <Items />
        </Layout> */}
        <Layout>
            <Router>
                <Routes />
            </Router>
        </Layout>

    </MuiThemeProvider>

);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
