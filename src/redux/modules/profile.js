export const LOADS_USER_PROFILE = 'LOADS_USER_PROFILE';

const initialState = {
    loading: true,
    profileData: [],
};

export function loadUserProfile(profileItems) {
    return {
        type: LOADS_USER_PROFILE,
        payload: profileItems
    };
}

export function ProfileCardReducer(state = initialState, action) {
    switch (action.type) {
    case LOADS_USER_PROFILE:
        return { loading: false, profileData: action.payload };
    default:
        return state;
    }
}

export function getProfileItems() {
    return function (dispatch) {
        Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
            fetch(url).then(response => response.json())
        ))).then(json => {
            const [items, users] = json;
            const profileId = 'dQg4HT262FYOiuOUIRj1xrXjOva2';
            const profileItems = items.map(item => {
                const itemOwner = users.filter(user => user.id === item.itemOwner);
                item.itemOwner = itemOwner[0];
                return item;
            });
            const myProfileData = users.filter(user => user.id === profileId);
            const myItems = items.filter(item => item.itemOwner.id === profileId);
            const borrowedItems = items.filter(item => item.borrower === profileId);
            dispatch(loadUserProfile(profileItems));
        });
    };
}
