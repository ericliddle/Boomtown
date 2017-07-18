import React from 'react';

import NoLogo from './NotFound';
import './style.css';

const NotFound = () => (
    <div className="NoLogo">
        <img src={NoLogo} alt="Not Found" />
    </div>
);

export default NotFound;
