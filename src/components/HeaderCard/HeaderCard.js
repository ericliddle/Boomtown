import React from 'react';


import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FilterList from '../FilterList';


import './style.css';


// Delete what you don't need
import logo from '../../images/boomtown-logo.svg';

const style = {
    margin: 12,
};

const HeaderCard = () => (

    <AppBar
        showMenuIconButton={false}
        title={
            <div className="AppbarLeft">
                <a href="/">
                    <img className="AppbarLogo" src={logo} alt="Boombtown Logo" />
                </a>
                <FilterList />
            </div>
        }
    >
        <div>
            <RaisedButton label="Profile" primary={true} style={style} />
            <RaisedButton label="Logout" secondary={true} style={style} />
        </div>
    </AppBar >
);

export default HeaderCard;
