import React from 'react';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';
import moment from 'moment';

const ItemCard = ({ itemDetails }) => (

    <li className="itemCardWrapper">
        <Card>
            <CardMedia overlay={<CardTitle title="" subtitle="" />} >
                <img src={itemDetails.imageUrl} alt="" />
            </CardMedia>
            <CardHeader
                title={itemDetails.itemOwner.fullName}
                subtitle={moment.unix(itemDetails.createdOn).fromNow()}
                avatar={<Gravatar email={itemDetails.itemOwner.email} style={{ borderRadius: 50 }} />}

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
);

export default ItemCard;
