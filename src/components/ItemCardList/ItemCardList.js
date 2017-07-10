import React from 'react';
import Masonry from 'react-masonry-component';
import ItemCard from '../ItemCard/ItemCard';
import './style.css';


const ItemCardList = ({ itemsData }) => (
    <Masonry
        className={'itemCardListWrapper'}
        elementType={'ul'}
    >
        {itemsData.map(itemData => (
            <ItemCard key={itemData.id} itemDetails={itemData} />
        ))}
    </Masonry>
);

export default ItemCardList;
