import React from 'react';

import { Card, CardText } from 'material-ui/Card';
import Gravatar from 'react-gravatar';
import './style.css';


const ProfileCard = ({ profileData }) => (

    <Card className="profile-card" >
        <CardText className="profile">
            <div className="profile-left">
                <h2>{profileData.fullName}</h2>
                <p>{profileData.bio}</p>
            </div>
            <div className="profile-right">
                <p>Shared Items</p>
                <p>Borrowed Items</p>
                <Gravatar
                    email={profileData.email}
                    style={{ borderRadius: 90, height: 180, width: 180 }}
                />
            </div>
        </CardText>
    </Card >
);

export default ProfileCard;
