import {
    LOADS_ITEMS_LIST
} from './actions';

const initialState = {
    loading: true,
    itemsData: [],
};

export function CardRenderReducer(state = initialState, action) {
    switch (action.type) {
    case LOADS_ITEMS_LIST:
        return { loading: false, itemsData: action.payload };
    default:
        return state;
    }
}
