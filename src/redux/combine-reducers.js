import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { CardRenderReducer } from './modules/items';
import { ProfileCardReducer } from './modules/profile';
import { uploadImageReducer } from './modules/share';
import authReducer from './modules/auth';
import client from '../config/apolloClient';


export default combineReducers({
    auth: authReducer,
    items: CardRenderReducer,
    profile: ProfileCardReducer,
    imageurl: uploadImageReducer,
    form: formReducer,
    apollo: client.reducer()
});
