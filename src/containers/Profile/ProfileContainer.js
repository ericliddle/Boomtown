import React, { Component } from 'react';
import { getProfileItems } from '../../redux/modules/profile';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import ProfileCard from '../../components/ProfileCard';


class ProfileContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getProfileItems(this.props.match.params.id));
    }

    render() {
        if (this.props.loading) return <Loader />;
        return (
            <ProfileCard
                profileData={this.props.profileData}
            />);
    }
}

function mapStateToProps(state) {
    return {
        loading: state.profile.loading,
        profileData: state.profile.profileData
    };
}

export default connect(mapStateToProps)(ProfileContainer);
