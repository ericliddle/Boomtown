import { combineReducers } from 'redux';

import { CardRenderReducer } from './modules/items';
import { ProfileCardReducer } from './modules/profile';

export default combineReducers({
    items: CardRenderReducer,
    profile: ProfileCardReducer,
});
