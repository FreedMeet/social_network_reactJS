import {stopSubmit} from "redux-form";
import {authAPI, securityAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {appStateType} from "./redux-store";
import {ResultCode, ResultCodeWithCaptcha} from "../types/apiType";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
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

type ActionsType = setUserDataActionType | getCaptchaUrlSuccessActionType

type setUserDataActionDataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type setUserDataActionType = {
    type: typeof SET_USER_DATA
    data: setUserDataActionDataType
}

export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean)
    : setUserDataActionType => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
});

type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    data: { captchaUrl: string }
}


export const getCaptchaUrlSuccess = (captchaUrl: string)
    : getCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    data: {captchaUrl}
});

type ThunkType = ThunkAction<Promise<void>, appStateType, unknown, ActionsType>

export const getMyProfileTC = (): ThunkType => async (dispatch) => {
    let data = await authAPI.getMyProfile()

    if (data.resultCode === ResultCode.Success) {
        let {id, email, login} = data.data;
        dispatch(setUserData(id, email, login, true))
    }
};
//TODO check loginUserTC
export const loginUserTC = (email: string, password: string,
                            rememberMe: boolean, captcha: string | null): ThunkType =>
    async (dispatch: any) => {
        let data = await authAPI.login(email, password, rememberMe, captcha);

        if (data.resultCode === ResultCode.Success) {
            dispatch(getMyProfileTC());
        } else {
            if (data.resultCode === ResultCodeWithCaptcha.CaptchaIsRequired) {
                dispatch(getCaptchaUrlTC())
            }
            let messages = data.messages.length > 0 ? data.messages[0] : 'Some error!';
            dispatch(stopSubmit('login', {_error: messages}));
        }
    };

export const getCaptchaUrlTC = (): ThunkType => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logoutUserTC = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout()

    if (data.resultCode === ResultCode.Success) {
        dispatch(setUserData(null, null, null, false))
    }

};


export default authReducer
