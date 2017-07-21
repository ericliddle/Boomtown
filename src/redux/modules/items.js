export const LOADS_ITEMS_LIST = 'LOADS_ITEMS_LIST';
export const LOAD_USER_PROFILE_ITEMS = 'LOAD_USER_PROFILE_ITEMS';
const LOAD_FILTER_ITEMS = 'LOAD_FILTER_ITEMS';


const initialState = {
    loading: true,
    itemsData: [],
    itemFilters: [],
    specificUserItems: []
};

export function loadItemsList(itemsWithOwners, specificUserItems) {
    return {
        type: LOADS_ITEMS_LIST,
        payload: { itemsWithOwners, specificUserItems }
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
            itemsData: action.payload.itemsWithOwners,
            specificUserItems: action.payload.specificUserItems
        };
    case LOAD_FILTER_ITEMS:
        return {
            ...state, itemFilters: action.payload
        };
    default:
        return state;
    }
}

export function getItemsAndUsers(userId) {
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
            let specificUserItems = [];
            if (userId) {
                specificUserItems = itemsWithOwners.filter(item => item.itemOwner.id === userId);
            }
            dispatch(loadItemsList(itemsWithOwners, specificUserItems));
        });
    };
}
    