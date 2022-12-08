let store = {
    _state: {
        profilePage: {
            posts: [],
            newPostText: ''

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Sweta'},
                {id: 2, name: 'Maks'},
                {id: 3, name: 'Valery'},
                {id: 4, name: 'Andrey'},
                {id: 5, name: 'Tanya'},
                {id: 6, name: 'Veronika'},
                {id: 7, name: 'Kostya'},
            ],
            messages: [
                {id: 1, messages: 'Hi'},
                {id: 2, messages: 'How are your'},
                {id: 3, messages: 'Yo'},
                {id: 4, messages: 'Yo'},
                {id: 5, messages: 'Yo'},
                {id: 6, messages: 'Yo'},
                {id: 7, messages: 'Yo'},
            ]
        }
    },
    getState(){
return this._state;
    },
    _callSubscriber  ()  {
    },
    addPost  ()  {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            numberOfLikes: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText  (newText)  {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer)  {
        this._callSubscriber = observer;
    }

}

export default store;