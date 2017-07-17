import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';
import moment from 'moment';

const ItemCard = ({ itemDetails }) => {

    const getTags = (tagList) => {
        let tagsList = '';

        for (let i = 0; i < tagList.length; i += 1) {
            tagsList += tagList[i];
            if (i < tagList.length - 1) tagsList += ', ';
        }
        return tagsList;
    };

    return (

        <li className="itemCardWrapper">

            <Card>
                <Link to={`/profile/${itemDetails.itemOwner.id}`}>
                    <CardMedia overlay={<CardTitle title="" subtitle="" />} >
                        <img src={itemDetails.imageUrl} alt="" />
                    </CardMedia>
                    <CardHeader
                        title={itemDetails.itemOwner.fullName}
                        subtitle={moment.unix(itemDetails.createdOn).fromNow()}
                        avatar={<Gravatar
                            email={itemDetails.itemOwner.email}
                            style={{ borderRadius: 50 }} />}
                    />
                </Link>
                <CardTitle
                    title={itemDetails.title}
                    subtitle={getTags(itemDetails.tags)}
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
