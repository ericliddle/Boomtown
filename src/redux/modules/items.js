export const LOADS_ITEMS_LIST = 'LOADS_ITEMS_LIST';
const LOAD_FILTER_ITEMS = 'LOAD_FILTER_ITEMS';


const initialState = {
    loading: true,
    itemsData: [],
    itemFilters: []
};

export function loadItemsList(itemsWithOwners) {
    return {
        type: LOADS_ITEMS_LIST,
        payload: itemsWithOwners
    };
}

export function updateItemsFilter(filters) {
    return {
        type: LOAD_FILTER_ITEMS,
        payload: filters
    };
}

export function CardRenderReducer(state = initialState, action) {
    switch (action.type) {
        case LOADS_ITEMS_LIST:
            return {
                ...state,
                loading: false,
                itemsData: action.payload
            };
        case LOAD_FILTER_ITEMS:
            return {
                ...state, itemFilters: action.payload
            };
        default:
            return state;
    }
}

export function getItemsAndUsers() {
    return function (dispatch) {
        Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
            fetch(url).then(response => response.json())
        ))).then(json => {
            const [items, users] = json;
            const itemsWithOwners = items.map(item => {
                const itemOwner = users.filter(user => user.id === item.itemOwner);
                item.itemOwner = itemOwner[0];
                return item;
            });
            dispatch(loadItemsList(itemsWithOwners));
        });
    };
}
