import React from 'react';

import { updateItemsFilter } from '../../redux/modules/items';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FilterList from '../../containers/FilterList';


import './style.css';


// Delete what you don't need
import logo from '../../images/boomtown-logo.svg';

const style = {
    margin: 12,
};

const HeaderCard = ({ itemFilters }) => (

    <AppBar
        showMenuIconButton={false}
        title={
            <div className="AppbarLeft">
                <a href="/">
                    <img className="AppbarLogo" src={logo} alt="Boombtown Logo" />
                </a>
                <FilterList
                    selectValues={itemFilters}
                    onChangeAction={updateItemsFilter}
                />
            </div>
        }
    >
        <div>
            <RaisedButton label="My Profile" primary={true} style={style} />
            <RaisedButton label="Logout" secondary={true} style={style} />
        </div>
    </AppBar >
);

const mapStateFromProps = (state) => ({
    itemFilters: state.items.itemFilters
});

export default connect(mapStateFromProps)(HeaderCard);
