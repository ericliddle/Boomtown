import React from 'react';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Masonry from 'react-masonry-component';
import moment from 'moment';

import './style.css';

const ItemCard = ({ itemDetails }) => (

    <Masonry>
        <li className="itemCardWrapper">
            <Card>
                <CardMedia overlay={<CardTitle subtitle={itemDetails.available} />} >
                    <img src={itemDetails.imageUrl} alt="" />
                </CardMedia>
                <CardHeader
                    title={itemDetails.itemOwner.fullName}
                    subtitle={moment.unix(itemDetails.createdOn).fromNow()}
                    avatar=""
                />
                <CardTitle title={itemDetails.title} subtitle={itemDetails.tags} />
                <CardText>
                    {itemDetails.description}
                </CardText>
                <CardActions>
                    <FlatButton label="Borrow" />
                </CardActions>
            </Card>
        </li>
    </Masonry>
);

export default ItemCard;