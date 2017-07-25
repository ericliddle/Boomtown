import { combineReducers } from 'redux';
import { CardRenderReducer } from './modules/items';
import { ProfileCardReducer } from './modules/profile';
import authReducer from './modules/auth';
import client from '../config/apolloClient';


export default combineReducers({
    auth: authReducer,
    items: CardRenderReducer,
    profile: ProfileCardReducer,
    apollo: client.reducer()
});
