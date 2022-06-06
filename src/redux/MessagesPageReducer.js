const SEND_MESSAGE = "SEND_MESSAGE";

let initState = {
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Azamat' },
        { id: 3, name: 'Daut' },
        { id: 4, name: 'Chitos' }
    ],
    messages: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Azamat' },
        { id: 3, message: 'Mirza' },
    ],
}

const MessagesPageReducer = (state = initState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: action.newMessageText }]
            };
        default:
            return state;
    }
}

export const sendMessage = (newMessageText) => ({type:SEND_MESSAGE, newMessageText})

export default MessagesPageReducer;