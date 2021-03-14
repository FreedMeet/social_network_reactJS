import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {

    _state: {
        profilePage: {
            PostsData: [
                { id: 1, message: "Hi! how are you?", publishedTime: "12:01" },
                { id: 2, message: "It`s my first post", publishedTime: "12:00" },
            ],
            newPostText: ''
        },
        messagePage: {
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
            ],
            newMessageText: ''
        },
    },

    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('state changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);
        this._callSubscriber(this._state)
    },

};

export default store