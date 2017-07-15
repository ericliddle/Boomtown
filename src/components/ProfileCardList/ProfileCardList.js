import React from 'react';
import Masonry from 'react-masonry-component';
import ProfileCard from '../ProfileCard/ProfileCard';
import './style.css';


const ProfileCardList = ({ profileData }) => (
    <Masonry
        className={'itemCardListWrapper'}
        elementType={'ul'}
    >
        {profileData.map(itemData => (
            <ProfileCard key={itemData.id} itemDetails={itemData} />
        ))}
    </Masonry>
);

export default ProfileCardList;
