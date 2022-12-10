// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [],
//             newPostText: ''
//
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Sweta'},
//                 {id: 2, name: 'Maks'},
//                 {id: 3, name: 'Artyom'},
//                 {id: 4, name: 'Andrey'},
//                 {id: 5, name: 'Tanya'},
//                 {id: 6, name: 'Veronika'},
//                 {id: 7, name: 'Kostya'},
//             ],
//             messages: [
//                 {id: 1, messages: 'Hi'},
//                 {id: 2, messages: 'How are your'},
//                 {id: 3, messages: 'Yo'},
//                 {id: 4, messages: 'Yo'},
//                 {id: 5, messages: 'Yo'},
//                 {id: 6, messages: 'Yo'},
//                 {id: 7, messages: 'Yo'},
//             ],
//             newMessageBody: ""
//         },
//         sidebar:{}
//     },
//     _callSubscriber() {
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//         this._state.profilePage= profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage= dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar= sidebarReducer(this._state.sidebar, action);
//
//         this._callSubscriber(this._state);
//
//     }
// }
//  export default store;