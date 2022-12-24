
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
    messages: [],
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return  {
                ...state,
                messages: [...state.messages, {id: 8, messages: body}]
            };
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;