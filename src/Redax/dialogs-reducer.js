const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Sweta'},
        {id: 2, name: 'Maks'},
        {id: 3, name: 'Artyom'},
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
    ],
    newMessageBody: ""
}
const dialogsReducer = (state= initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 8, messages: body})
            return state;
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type:UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer;