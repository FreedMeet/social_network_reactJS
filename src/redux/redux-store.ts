import thunkMiddleware, {ThunkAction} from "redux-thunk"
import authReducer from "./authReducer"
import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import usersReducer from "./usersReducer"
import appReducer from "./appReducer"
import {reducer as formReducer} from 'redux-form'
import {Action} from "redux";
import chatReducer from "./chatReducer";

const { createStore, combineReducers, applyMiddleware } = require("redux")

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    chat: chatReducer
})

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferValueTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

type rootReducerType = typeof rootReducer
export type appStateType = ReturnType<rootReducerType>

export type CommonThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, appStateType, unknown, A>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export default store
