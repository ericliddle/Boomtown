import { combineReducers } from 'redux';

import client from '../config/apolloClient';
import { CardRenderReducer } from './modules/items';
import { ProfileCardReducer } from './modules/profile';

export default combineReducers({
    items: CardRenderReducer,
    profile: ProfileCardReducer,
    apollo: client.reducer()
});
