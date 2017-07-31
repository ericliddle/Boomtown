export const LOADS_USER_PROFILE = 'LOADS_USER_PROFILE';

export function loadUserProfile(profileItems) {
    return {
        type: LOADS_USER_PROFILE,
        payload: profileItems
    };
}
const initialState = {
    loading: true,
    profileData: {},
};


export function ProfileCardReducer(state = initialState, action) {
    switch (action.type) {
        case LOADS_USER_PROFILE:
            return {
                loading: false,
                profileData: action.payload
            };
        default:
            return state;
    }
}

export function getProfileItems(profileId) {
    return function (dispatch) {
        fetch(`http://localhost:3001/users/${profileId}`)
            .then(response => response.json())
            .then(json => {
                const user = json;
                dispatch(loadUserProfile(user));
            });
    };
}
