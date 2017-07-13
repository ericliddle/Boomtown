import React from 'react';
import PropTypes from 'prop-types';
import HeaderCard from '../HeaderCard';


import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="andthisshittoo" >
            <HeaderCard className="fuckthisshit" />
        </div>
        <div className="appContent">
            {children}
        </div>
        {<h1>© 2017 Boomtown Corp. All Rights Reserved</h1>}
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
