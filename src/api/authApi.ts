import {APIResponseType, ResultCode, ResultCodeWithCaptcha} from "../types/apiType"
import {instance} from "./api"

type MyProfileResDataType = {
    id: number
    email: string,
    login: string
}

type loginResDataTypes = {
    userId: number
}

export const authAPI = {
    getMyProfile() {
        return instance.get<APIResponseType<MyProfileResDataType>>(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance
            .post<APIResponseType<loginResDataTypes, ResultCode | ResultCodeWithCaptcha>>
            (`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    }
}