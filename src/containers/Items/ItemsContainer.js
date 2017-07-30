import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

import Loader from '../../components/Loader';
import Items from './Items';

class ItemsContainer extends Component {

    filterItemsByTags(itemsData) {
        const itemFilters = this.props.itemFilters;
        if (itemFilters.length) {
            return itemsData.filter(item => item.tags.find(
                tag => itemFilters.includes(tag)));
        }
        return itemsData;
    }

    render() {
        const { data: { loading, items } } = this.props;
        if (loading) return <Loader />;
        const filteredItemsData = this.filterItemsByTags(items);
        return <Items itemsData={filteredItemsData} />;
    }
}

const fetchItems = gql`
    query fetchItems {
        items{
            id
            title
            description
            imageurl
            tags{
                id
                title
            }
            itemowner{
                id
                email
                fullname
                bio
            }
        }
        }
`;

function mapStateToProps(state) {
    return {
        // loading: state.items.loading,
        // itemsData: state.items.itemsData,
        itemFilters: state.items.itemFilters
    };
}

const ItemsContainerWithData = graphql(fetchItems)(ItemsContainer);
export default connect(mapStateToProps)(ItemsContainerWithData);
