const SEND_MESSAGE = 'dialogs/SEND-MESSAGE'

export type DialogType = {
    id: number
    name: string
};
export type MessageType = {
    id: number
    message: string
};

let initialState = {
    DialogsData: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Danil"},
    ] as Array<DialogType>,
    MessageData: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo!"},
        {id: 4, message: "Yo!"},
        {id: 5, message: "Yo!"},
    ] as Array<MessageType>
};

export type initialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                MessageData: [...state.MessageData, {id: 6, message: action.newMessageText}]
            };

        default:
            return state;
    }
};

type sendMessageActionType = {
    type: typeof SEND_MESSAGE
    newMessageText: string
}

export const sendMessage = (newMessageText: string): sendMessageActionType => ({type: SEND_MESSAGE, newMessageText});

export default dialogsReducer;