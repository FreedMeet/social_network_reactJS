import {InferValueTypes} from "./redux-store"

let initialState = {
    DialogsData: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Daniil"},
    ] as Array<DialogType>,
    MessageData: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo!"},
        {id: 4, message: "Yo!"},
        {id: 5, message: "Yo!"},
    ] as Array<MessageType>
}

type initialStateType = typeof initialState
type ActionsType = InferValueTypes<typeof actions>
export type DialogType = { id: number, name: string }
export type MessageType = { id: number, message: string }

const dialogsReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'dialogs/SEND-MESSAGE':
            return {
                ...state,
                MessageData: [...state.MessageData, {id: 6, message: action.newMessageText}]
            }
        default:
            return state
    }
}

export const actions = {
    sendMessage: (newMessageText: string) => ({type: 'dialogs/SEND-MESSAGE', newMessageText} as const)
}

export default dialogsReducer