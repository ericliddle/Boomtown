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

    render() {
        if (this.props.loading) return <Loader />;
        return <Items itemsData={this.props.itemsData} />;
    }
}

function mapStateToProps(state) {
    return {
        loading: state.items.loading,
        itemsData: state.items.itemsData
    };
}

//PROP TYPE VALIDATION
export default connect(mapStateToProps)(ItemsContainer);
