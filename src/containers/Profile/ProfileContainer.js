import React, { Component } from 'react';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Loader from '../../components/Loader';
import ProfileCard from '../../components/ProfileCard';
import Items from '../Items/Items';

import './styles.css';

class ProfileContainer extends Component {

    render() {
        if (this.props.data.loading) return <Loader />;
        return (
            <div className="profileContainer">
                <ProfileCard profileData={this.props.data.user} />
                <Items itemsData={this.props.data.user.items} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.profile.loading,
        myProfile: state.profile.myProfile,
        itemsData: state.items.itemsData,
        specificUserItems: state.items.specificUserItems
    };
}


const getUsers = gql`
   query fetchUsers($id: ID!) {
    user(id: $id) {
      id
      email
      fullname
      bio
      items {
        id
        imageurl
        itemowner{
          email
          fullname
          id
          }
        title
        created 
        tags {
            title
        }
        description
      }
    borrowed {
      title
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
