const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    DialogsData: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Danil" },
    ],
    MessageData: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo!" },
        { id: 4, message: "Yo!" },
        { id: 5, message: "Yo!" },
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                MessageData: [...state.MessageData, { id: 6, message: action.newMessageText }]
            };

        default:
            return state;
    };
};

export const sendMessageAC = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText });

export default dialogsReducer;