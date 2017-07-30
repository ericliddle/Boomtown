//Imported to items.js redux/modules


// // Action constants

// export const LOADS_ITEMS_LIST = 'LOADS_ITEMS_LIST';

// // Action Creators

// export function loadItemsList(itemsWithOwners) {
//     return {
//         type: LOADS_ITEMS_LIST,
//         payload: itemsWithOwners
//     };
// }


// export function getItemsAndUsers() {
//     return function (dispatch) {
//         Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
//             fetch(url).then(response => response.json())
//         ))).then(json => {
//             const [items, users] = json;
//             const itemsWithOwners = items.map(item => {
//                 const itemowner = users.filter(user => user.id === item.itemowner);
//                 item.itemowner = itemowner[0];
//                 return item;
//             });
//             dispatch(loadItemsList(itemsWithOwners));
//         });
//     };
// }
