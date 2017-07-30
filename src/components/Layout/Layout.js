import React from 'react';
import PropTypes from 'prop-types';
import HeaderCard from '../HeaderCard';


import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="headerCardWarpper" >
            <HeaderCard className="headerCardClass" />
        </div>
        <div className="appContent">
            {children}
        </div>
        <span className="copyright">
            {<h1>© 2017 Boomtown Corp. All Rights Reserved</h1>}
        </span>
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
