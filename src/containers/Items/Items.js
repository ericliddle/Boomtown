import React from 'react';


import './style.css';

const Item = ({ itemData }) => (
    <li>
        <img src={itemData.imageUrl} alt={itemData.title} />
        <h2>{itemData.title}</h2>
        <p>{itemData.itemOwner}</p>
        <p>{itemData.createdOn}</p>
        <p>{itemData.tags}</p>
        <p>{itemData.description}</p>
    </li>
);
const Items = ({ itemsData }) => (
    <div>
        <ul>
            {itemsData.map(itemData => (
                <Item itemData={itemData} />
            ))}
        </ul>
    </div>
);

export default Items;
