import React, { Component } from 'react';
import { FirebaseAuth, FirebaseStorage } from 'firebase';
import Shared from './Shared';

class SharedContainer extends Component {

    selectImage = (fileInput) => {
        this.fileInput = this.fileInput || fileInput;
        this.fileInput.click();
    }

    // TODO: Prepase to uncomment this
    // startImageUpload and setItemimageurl will be action items when defined
    // Will need a reducer for this form so that it uploads it to the store
    handleImageUpload = () => {
        const cloud = FirebaseStorage.ref();
        const userId = FirebaseAuth.currentUser.uid;
        const fileName = this.fileInput.files[0].name;
        // this.props.dispatch(startImageUpload());
        cloud.child(`images/${userId}/${fileName}`)
            .put(this.fileInput.files[0])
            .then(result => {
                console.log(result)
                // this.props.dispatch(setItemimageurl(result.metadata.downloadURLs[0]));
                //this.handleNext(); TODO: Can use this to do a stepper form
            });
    }

    handleSubmit = () => {
        console.log('wah wah');
    }

    render() {
        return (
            <Shared />
        );
    }
}

export default SharedContainer;
