import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';
import moment from 'moment';
import './style.css';

const ItemCard = ({ itemDetails }) => {
    return (
        <li className="itemCardWrapper">
            <Card>
                <Link to={`/profile/${itemDetails.itemowner.id}`}>
                    <CardMedia overlay={<CardTitle title="" subtitle="" />} >
                        <img src={itemDetails.imageurl} alt="" />
                    </CardMedia>
                    <CardHeader
                        title={itemDetails.itemowner.fullname}
                        subtitle={moment.unix(itemDetails.created).fromNow()}
                        avatar={<Gravatar
                            email={itemDetails.itemowner.email}
                            style={{ borderRadius: 50 }}
                        />}
                    />
                </Link>
                <CardTitle title={itemDetails.title} subtitle={(itemDetails.tags.map(tag => tag.title).join(', '))} />

                <CardText>
                    {itemDetails.description}
                </CardText>
                <CardActions>
                    <FlatButton label="Borrow" className="borrowbtn"/>
                </CardActions>
            </Card>
        </li>
    );
};

export default ItemCard;
