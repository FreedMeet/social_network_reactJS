import {stopSubmit} from "redux-form";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: 2,
    email: null,
    password: null,
    rememberMe: null,
    login: null,
    isAuth: false,
    isFething: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state
    }
};

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
});

export const getMyProfileTC = () => async (dispatch) => {
    let data = await authAPI.getMyProfile()

    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setUserData(id, email, login, true))
    }
};

export const loginUserTC = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)

    if (data.resultCode === 0) {
        dispatch(getMyProfileTC())
    } else {
        let messages = data.messages.length > 0 ? data.messages[0] : 'Some error!'
        dispatch(stopSubmit('login', {_error: messages}));
    }

};

export const logoutUserTC = () => async (dispatch) => {
    let data = await authAPI.logout()

    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }

};


export default authReducer
