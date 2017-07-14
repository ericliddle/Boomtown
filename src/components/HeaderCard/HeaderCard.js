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

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];


const HeaderCard = () => (
    
    <AppBar
        showMenuIconButton={false}
        title={
            <div className="AppbarLeft">
                <div>
                    <img className="AppbarLogo" src={logo} alt="Boombtown Logo" />

                    <SelectField
                        multiple={true}
                        hintText="Filter by Tag"
                    >
                        <MenuItem value={null} primaryText="" />
                        <MenuItem value={false} primaryText="No" />
                        <MenuItem value={true} primaryText="Yes" />
                    </SelectField>
                </div>
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
