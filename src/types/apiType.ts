import {UsersType} from "./types";

export enum ResultCode {
    Success = 0,
    Error = 1,
}
export enum ResultCodeWithCaptcha {
    CaptchaIsRequired = 10
}

// userAPI

export type getUsersResType = {
    items: Array<UsersType>
    totalCount: number
    error: string | null
}

export type APITypes = {
    resultCode: ResultCode
    messages: Array<string> | null
    data: any
}

// authAPI

export type MyProfileResponseType = {
    data: {
        id: number
        email: string,
        login: string
    }
    resultCode: ResultCode
    messages: Array<string>
}

export type loginResTypes = {
    resultCode: ResultCode | ResultCodeWithCaptcha
    messages: Array<string>
    data: any
}