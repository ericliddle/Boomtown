import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';
import moment from 'moment';

const ItemCard = ({ itemDetails }) => {
    return (
        <li className="itemCardWrapper">
            <Card>
                <Link to={`/profile/${itemDetails.itemOwner.id}`}>
                    <CardMedia overlay={<CardTitle title="" subtitle="" />} >
                        <img src={itemDetails.imageUrl} alt="" />
                    </CardMedia>
                    <CardHeader
                        title={itemDetails.itemOwner.fullname}
                        subtitle={moment.unix(itemDetails.createdOn).fromNow()}
                        avatar={<Gravatar
                            email={itemDetails.itemOwner.email}
                            style={{ borderRadius: 50 }}
                        />}
                    />
                </Link>
                <CardTitle
                    title={itemDetails.title}
                    subtitle={itemDetails.tags.join(', ')}
                />
                <CardText>
                    {itemDetails.description}
                </CardText>
                <CardActions>
                    <FlatButton label="Borrow" />
                </CardActions>
            </Card>
        </li>
    );
};

export default ItemCard;
