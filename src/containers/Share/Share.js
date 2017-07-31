import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Gravatar from 'react-gravatar';
import { Field, reduxForm } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import itemPlaceHolder from '../../images/item-placeholder.jpg';
import './style.css';

const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
}) =>
    (<TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />);

const renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
}) =>
    (<SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}
    />);

const tags = [
    { id: 2, title: 'Household Items' },
    { id: 3, title: 'Physical Media' },
    { id: 4, title: 'Electronics' },
    { id: 5, title: 'Musical Instruments' },
    { id: 6, title: 'Recreational Equipment' },
    { id: 7, title: 'Sporting Goods' },
    { id: 8, title: 'Tools' }
];


let Share = ({ shareForm, handleSubmit, addNewItem, selectImage, handleImageUpload }) => {
    let uploadInput = false;

    const renderTags = (tags) => (tags.map((tag) => (
        <MenuItem
            key={tag.title}
            insetChildren={true}
            checked={shareForm && shareForm.values.tags.includes(tag)}
            value={tag}
            primaryText={tag.title}
        />
    )));

    return (
        <div className="newItemContainer">
            <div className="newItemCard">
                <Card>
                    <CardMedia>
                        <img src={itemPlaceHolder} alt="" />
                    </CardMedia>

                    <CardHeader
                        title="Item Owner"
                        subtitle="Time created"
                        avatar={<Gravatar email="fakeemail@gmail.com" className="gravatarImage" />}
                    />

                    <CardTitle title="New Item Title" subtitle="New Tags" />

                    <CardText>
                        New item description.
                    </CardText>
                </Card>
            </div>

            <div className="newItemForm">
                <form onSubmit={addNewItem}>
                    <h1>Add an Image</h1>
                    <p>We live in a visual culture. Upload an image of the item you're sharing.</p>
                    <RaisedButton
                        label="Select an Image"
                        onClick={() => selectImage(uploadInput)}
                    /><br />
                    <h1>Add a Title & Description</h1>
                    <Field
                        component={renderTextField}
                        label="Item Title"
                        name="shareTitle"
                    /><br />
                    <Field
                        component={renderTextField}
                        label="Item Description"
                        name="shareDescription"
                    /><br />
                    <h1>Categorize Your Item</h1>
                    <Field
                        name="itemTags"
                        component={renderSelectField}
                        label="Categorize Your Item"
                    >
                        {renderTags(tags)}
                    </Field>
                    <input
                        onChange={handleImageUpload}
                        ref={(input) => { uploadInput = input; }}
                        hidden
                        type="file"
                        id="input"
                    />
                    <h1>Confirm Things!</h1>
                    <RaisedButton
                        label="Share New Item"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
};
Share = reduxForm({
    // a unique name for the form
    form: 'share'
})(Share);
export default Share;


























// <form onSubmit={handleSubmit}>

//     <div className="itemTitle">
//         <Field
//             name="itemTitle"
//             component={renderTextField}
//             label="Item Title"
//         />
//     </div>
//     <div className="imageSubmit">
//         <label htmlFor="firstName">First Name</label>
//         <Field name="firstName" component="input" type="text" />
//         <RaisedButton
//             label="Select an Image"
//             onClick={() => selectImage(uploadInput)}
//         />
//         <input
//             onChange={handleImageUpload}
//             ref={(input) => { uploadInput = input; }}
//             hidden
//             type="file"
//             id="input"
//         />
//     </div >
//     <div>
//         <Field
//             name="itemDescription"
//             component={renderTextField}
//             label="Describe Your Item"
//         />
//     </div>
//     <div className="selectTags">
//         <Field
//             name="selectTags"
//             component={renderSelectField}
//             label="Select Your Tags"
//         >
//             <MenuItem value="ff0000" primaryText="Red" />
//             <MenuItem value="00ff00" primaryText="Green" />
//             <MenuItem value="0000ff" primaryText="Blue" />
//         </Field>
//     </div>
// </form >
// };

// Share = reduxForm({
//     // a unique name for the form
//     form: 'contact'
// })(Share);

// export default Share;
