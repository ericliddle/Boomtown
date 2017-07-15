import React, { Component } from 'react';
import { getProfileItems } from '../../redux/modules/profile';
import { connect } from 'react-redux';

import Loader from '../../components/Loader';
import Profile from './Profile';

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getProfileItems(

        ));
    }

    render() {
        if (this.props.loading) return <Loader />;
        return <Profile profileData={this.props.profileData} />;
    }
}

function mapStateToProps(state) {
    return {
        loading: state.profile.loading,
        profileData: state.profile.profileData
    };
}

export default connect(mapStateToProps)(ProfileContainer);
