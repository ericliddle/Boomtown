import React, { Component } from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
// import FlatButton from 'material-ui/FlatButton';
import Share from './Share';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { setItemImageUrl } from '../../redux/modules/share';
import { FirebaseAuth, FirebaseStorage } from '../../config/firebase';


class ShareContainer extends Component {

    selectImage = (fileInput) => {
        this.fileInput = this.fileInput || fileInput;
        this.fileInput.click();
    }

    handleImageUpload = () => {
        const cloud = FirebaseStorage.ref();
        const userId = FirebaseAuth.currentUser.uid;
        const fileName = this.fileInput.files[0].name;
        // this.props.dispatch(startImageUpload());

        cloud.child(`images/${userId}/${fileName}`)
            .put(this.fileInput.files[0])
            .then(result => {
                console.log(result);
                this.props.dispatch(setItemImageUrl(result.metadata.downloadURLs[0]));
                // this.handleNext(); TODO: Can use this to do a stepper form
            }).catch((error) => {
                console.log(error);
            });
    }

    handleSubmit = () => {
        console.log('wah wah');
    }

    render() {
        return (
            <Share />
        );
    }
}
const addItem = gql`
    mutation addItem(
        $title: String!
        $imageurl: String
        $itemowner: ID!              
        $description: String!
        $tags: [AssignedTag]!
    ) {
        addItem(
        title: $title
        imageurl: $imageurl
        itemowner: $itemowner          
        description: $description
        tags: $tags
    ) {
        title
        imageurl
        description
        itemowner{
            id
        }
        tags
            {
            title
            }
        }
    }
`;

function mapStateToProps(state) {
    return {
        authenticated: state.auth.userProfile,
        shareForm: state.form.share,
        imageurl: state.imageurl.imageField
    };
}

const UserAddedItems = graphql(addItem)(ShareContainer);
export default connect(mapStateToProps)(UserAddedItems);
