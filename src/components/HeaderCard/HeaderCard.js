import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import { updateItemsFilter } from '../../redux/modules/items';
import FilterList from '../../containers/FilterList';


import './style.css';


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
        <div className="headerbarbuttons">
            {/* {authenticated && <Link to={`profile/${authenticated}`}> */}
            <RaisedButton label="My Profile" primary={true} style={style} />
            {/* </Link>} */}
            <RaisedButton label="Logout" secondary={true} style={style} />
        </div>
    </AppBar >
);

const mapStateFromProps = (state) => ({
    itemFilters: state.items.itemFilters,
    // authenticated: state.auth.userProfile,

});

export default connect(mapStateFromProps)(HeaderCard);
