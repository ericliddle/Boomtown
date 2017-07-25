// write actions
// constants
// reducer
// add to store

// Action Name
export const UPDATE_AUTH_STATE = 'UPDATE_AUTH_STATE';
export const SHOW_LOGIN_ERROR = 'SHOW_LOGIN_ERROR';

// Action Creators
export const updateAuthState = userProfile => ({ type: UPDATE_AUTH_STATE, payload: userProfile });
export const showLoginError = show => ({ type: SHOW_LOGIN_ERROR, pyload: show });


export default (state = {
    userProfile: false,
    showLoginError: false,
}, action) => {
    switch (action.type) {
        case UPDATE_AUTH_STATE:
            return { ...state, userProfile: action.payload };
        case SHOW_LOGIN_ERROR:
            return { ...state, showLoginError: true };
        default:
            return state;
    }
};
