import React from 'react';
import ItemCardList from '../../components/ItemCardList';


// import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
// import Masonry from 'react-masonry-component';
// import moment from 'moment';

import './style.css';

const Items = ({ itemsData }) => (
    <ItemCardList itemsData={itemsData} />
);

// const Item = ({ itemData }) => (

//     <Masonry>
//         <ul className="itemCardListWrapper">
//             <Card>
//                 <CardMedia overlay={<CardTitle subtitle={itemData.available} />} >
//                     <img src={itemData.imageUrl} alt="" />
//                 </CardMedia>
//                 <CardHeader
//                     title={itemData.itemOwner.fullName}
//                     subtitle={moment.unix(itemData.createdOn).fromNow()}
//                     avatar=""
//                 />
//                 <CardTitle title={itemData.title} subtitle={itemData.tags} />
//                 <CardText>
//                     {itemData.description}
//                 </CardText>
//                 <CardActions>
//                     <FlatButton label="Borrow" />
//                 </CardActions>
//             </Card>
//         </ul>
//     </Masonry>
// );



//     <li>
//         <img src={itemData.imageUrl} alt={itemData.title} />
//         <h2>{itemData.title}</h2>
//         <p>{itemData.itemOwner.fullName}</p>
//         <p>{itemData.createdOn}</p>
//         <p>{itemData.tags}</p>
//         <p>{itemData.description}</p>
//     </li>
// );

// const Items = ({ itemsData }) => (
//     <div>
//         <ul>
//             {itemsData.map(itemData => (
//                 <Item itemData={itemData} />
//             ))}
//         </ul>
//     </div>
// );

export default Items;
