import {stopSubmit} from "redux-form";
import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';


let initialState = {
    userId: 2,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.data,
            };
        default:
            return state
    }
};

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});

export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, data: {captchaUrl}});

export const getMyProfileTC = () => async (dispatch) => {
    let data = await authAPI.getMyProfile()

    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setUserData(id, email, login, true))
    }
};

export const loginUserTC = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);

    if (data.resultCode === 0) {
        dispatch(getMyProfileTC());
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrlTC())
        }
        let messages = data.messages.length > 0 ? data.messages[0] : 'Some error!';
        dispatch(stopSubmit('login', {_error: messages}));
    }
};

export const getCaptchaUrlTC = () => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logoutUserTC = () => async (dispatch) => {
    let data = await authAPI.logout()

    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }

};


export default authReducer
