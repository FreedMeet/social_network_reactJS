import {FormAction, stopSubmit} from "redux-form"
import {CommonThunkType, InferValueTypes} from "./redux-store"
import {ResultCode, ResultCodeWithCaptcha} from "../types/apiType"
import {authAPI} from "../api/authApi"
import {securityAPI} from "../api/securityApi"

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

type InitialStateType = typeof initialState
type ActionsType = InferValueTypes<typeof actions>
type ThunkType = CommonThunkType<ActionsType | FormAction>

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "auth/SET_USER_DATA":
        case "auth/GET_CAPTCHA_URL_SUCCESS":
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}

export const actions = {
    setUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'auth/SET_USER_DATA',
        data: {userId, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'auth/GET_CAPTCHA_URL_SUCCESS',
        data: {captchaUrl}
    } as const)
}


export const getMyProfileTC = (): ThunkType => async (dispatch) => {
    let data = await authAPI.getMyProfile()

    if (data.resultCode === ResultCode.Success) {
        let {id, email, login} = data.data
        dispatch(actions.setUserData(id, email, login, true))
    }
}

export const loginUserTC = (email: string, password: string,
                            rememberMe: boolean, captcha: string | null): ThunkType =>
    async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe, captcha)

        if (data.resultCode === ResultCode.Success) {
            dispatch(getMyProfileTC())
        } else {
            if (data.resultCode === ResultCodeWithCaptcha.CaptchaIsRequired) {
                dispatch(getCaptchaUrlTC())
            }
            let messages = data.messages.length > 0 ? data.messages[0] : 'Some error!'
            dispatch(stopSubmit('login', {_error: messages}))
        }
    }

export const getCaptchaUrlTC = (): ThunkType => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export const logoutUserTC = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout()

    if (data.resultCode === ResultCode.Success) {
        dispatch(actions.setUserData(null, null, null, false))
    }

}

export default authReducer
