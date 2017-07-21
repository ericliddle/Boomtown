import React, { Component } from 'react';
import { getItemsAndUsers } from '../../redux/modules/items';
import { connect } from 'react-redux';


import Loader from '../../components/Loader';
import Items from './Items';

class ItemsContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getItemsAndUsers(
        ));
    }

    filterItemsByTags() {
        const itemFilters = this.props.itemFilters;
        const itemsData = this.props.itemsData;
        if (itemFilters.length) {
            return itemsData.filter(item => item.tags.find(
                tag => itemFilters.includes(tag)));
        }
        return itemsData;
    }

    render() {
        if (this.props.loading) return <Loader />;
        const filteredItemsData = this.filterItemsByTags();
        return <Items itemsData={filteredItemsData} />;
    }
}

function mapStateToProps(state) {
    return {
        loading: state.items.loading,
        itemsData: state.items.itemsData,
        itemFilters: state.items.itemFilters
    };
}

export default connect(mapStateToProps)(ItemsContainer);
