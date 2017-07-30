import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './style.css';

let uploadInput = false;

const Shared = (handleSubmit, selectImage, handleImageUpload) => (

    <form onSubmit={handleSubmit}>
        <RaisedButton
            label="Select an Image"
            onClick={() => selectImage(uploadInput)}
        />
        <input
            onChange={handleImageUpload}
            ref={(input) => { uploadInput = input; }}
            hidden
            type="file"
            id="input"
        />
    </form>
);

export default Shared;
