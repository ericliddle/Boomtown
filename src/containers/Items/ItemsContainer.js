import React, { Component } from 'react';
import { getItemsAndUsers } from '../../redux/actions';
import { connect } from 'react-redux';


import Loader from '../../components/Loader';
import Items from './Items';

class ItemsContainer extends Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         loading: true,
    //         itemsData: [],
    //     };
    // }

    componentDidMount() {
        this.props.dispatch(getItemsAndUsers(

        ));

        // Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
        //     fetch(url).then(response => response.json())
        // ))).then(json => {
        //     const [items, users] = json;
        //     const itemsWithOwners = items.map(item => {
        //         const itemOwner = users.filter(user => user.id === item.itemOwner);
        //         item.itemOwner = itemOwner[0];
        //         return item;
        // });

        // this.setState({
        //     itemsData: itemsWithOwners,
        //     loading: false
        // });
        //     }).catch(error => console.log(error));
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

export default connect(mapStateToProps)(ItemsContainer);
