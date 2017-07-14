import { applyMiddleware, createStore, combineReducers } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { CardRenderReducer } from './reducer';

export default createStore(
    combineReducers({
        items: CardRenderReducer
    }),
    composeWithDevTools(
        applyMiddleware(
            logger,
            thunk
        )
    )
);
