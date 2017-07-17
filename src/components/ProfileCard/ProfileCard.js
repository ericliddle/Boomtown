import React from 'react';

import { Card, CardText } from 'material-ui/Card';
import Gravatar from 'react-gravatar';
import './style.css';


const ProfileCard = ({ profileData }) => (

    <Card className="profile-card" >
        <CardText className="profile">
            <div className="profile-left">
                <h2>{profileData.userdata.fullName}</h2>
                <p>{profileData.userdata.bio}</p>
            </div>
            <div className="profile-right">
                <p>Shared Items</p>
                <p>Borrowed Items</p>
                <Gravatar
                    className="name5"
                    email={profileData.userdata.email}
                    style={{ borderRadius: 90, height: 180, width: 180 }}
                />
            </div>
        </CardText>
    </Card >
);

export default ProfileCard;
