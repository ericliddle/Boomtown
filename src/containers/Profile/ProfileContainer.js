import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProfileItems } from '../../redux/modules/profile';
import { getItemsAndUsers } from '../../redux/modules/items';
import Loader from '../../components/Loader';
import ProfileCard from '../../components/ProfileCard';
import Items from '../Items/Items';

import './styles.css';

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getProfileItems(this.props.match.params.id));
        this.props.dispatch(getItemsAndUsers(this.props.match.params.id));
    }

    render() {
        if (this.props.loading) return <Loader />;
        return (
            <div className="profileContainer">
                <ProfileCard profileData={this.props.profileData} />
                <Items itemsData={this.props.specificUserItems} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.profile.loading,
        profileData: state.profile.profileData,
        specificUserItems: state.items.specificUserItems
    };
}

export default connect(mapStateToProps)(ProfileContainer);
