import React from 'react';
import ProfileCardList from '../../components/ProfileCardList';

import './style.css';

const Profile = ({ profileData }) => (
    <ProfileCardList profileData={profileData} />
);

export default Profile;
