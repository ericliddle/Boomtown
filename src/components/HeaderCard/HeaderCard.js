import React from 'react';

import './style.css';

import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';


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
                <img className="AppbarLogo" src={logo} alt="Boombtown Logo" />

                <SelectField
                    className="selectFieldMenu"
                    multiple={true}
                    hintText="Filter by Tag"
                >
                    <MenuItem value={true} primaryText="Electronics" />
                    <MenuItem value={true} primaryText="Household Items" />
                    <MenuItem value={true} primaryText="Musical Instruments" />
                    <MenuItem value={true} primaryText="Physical Media" />
                    <MenuItem value={true} primaryText="Recreational Media" />
                    <MenuItem value={true} primaryText="Sporting Goods" />
                    <MenuItem value={true} primaryText="Tools" />
                </SelectField>
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
