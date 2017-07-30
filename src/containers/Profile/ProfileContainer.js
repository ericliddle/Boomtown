import React, { Component } from 'react';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
// import { getProfileItems } from '../../redux/modules/profile';
// import { getItemsAndUsers } from '../../redux/modules/items';
import Loader from '../../components/Loader';
import ProfileCard from '../../components/ProfileCard';
import Items from '../Items/Items';

import './styles.css';

class ProfileContainer extends Component {

    // componentDidMount() {
    // this.props.dispatch(getProfileItems(this.props.match.params.id));
    // this.props.dispatch(getItemsAndUsers(this.props.match.params.id));
    // }

    render() {
        if (this.props.data.loading) return <Loader />;
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
        // loading: state.profile.loading,
        // myProfile: state.profile.myProfile,
        // itemsData: state.items.itemsData,
        // specificUserItems: state.items.specificUserItems
    };
}


const getUsers = gql`
  query fetchUsers($id: ID!) {
    user(id: $id) {
      id  
      fullname
      bio
      email
      items {
        id
        title
        description
        imageurl
        tags {
            title
        }
        created
        available
        borrower {
            id
            fullname
        }
        itemowner {
            id
            email
            fullname
        }
      }
      borrowed {
          id
          title
          itemowner {
            id
            fullname
          }
      }
    }
  }
`;

const profileContainerWithData = graphql(getUsers, {
    options: props => ({
        variables: { id: props.match.params.id }
    }),
})(ProfileContainer);

export default connect(mapStateToProps)(profileContainerWithData);
