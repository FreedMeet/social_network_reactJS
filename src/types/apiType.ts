export enum ResultCode {
    Success = 0,
    Error = 1,
}

export enum ResultCodeWithCaptcha {
    CaptchaIsRequired = 10
}

export type APIResponseType<D = {}, RC = ResultCode> = {
    data: D
    messages: Array<string>
    resultCode: RC
}