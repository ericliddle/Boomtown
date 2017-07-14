import {
    RENDER_ITEM_CARDS
} from './actions';

const initialState = {
    loading: true,
    itemsData: [],
};

export function CardRenderReducer(state = initialState, action) {
    switch (action.type) {
    case RENDER_ITEM_CARDS:
        const cardRenderState = { loading: false, itemsData: action.payload };
        return cardRenderState;
    default:
        return state;
    }
}
