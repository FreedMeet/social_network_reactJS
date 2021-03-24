import axios from 'axios';
import {ProfileType} from "../types/types";
import {APITypes, getUsersResType, loginResTypes, MyProfileResponseType} from "../types/apiType";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e8633e93-5002-4074-b903-3b066895cdeb'
    }
});

export const userAPI = {
    getUsers (currentPage = 1, pageSize = 3) {
        return instance.get<getUsersResType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followUser (userId: number) {
        return instance.post<APITypes>(`follow/`+ userId).then(response => response.data);
    },
    unFollowUser (userId: number) {
        return instance.delete<APITypes>(`follow/`+ userId).then(response => response.data);
    }
};

export const profileAPI = {
    getProfile (userId: number) {
        return instance.get<ProfileType>(`profile/` + userId).then(response => response.data);
    },
    getStatus (userId: number) {
        return instance.get(`profile/status/` + userId).then(response => response.data);
    },
    updateStatus (status: string) {
        return instance.put<APITypes>(`profile/status`, {status: status}).then(response => response.data);
    },
    savePhoto (photoFile: File) {
        let formData = new FormData();
        formData.append('image', photoFile)
        return instance.put<APITypes>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);
    },
    saveProfile (profile: ProfileType) {
        return instance.put<APITypes>(`profile`, profile).then(response => response.data);
    }
};


export const authAPI = {
    getMyProfile () {
        return instance.get<MyProfileResponseType>(`auth/me`).then(response => response.data);
    },
    login (email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<loginResTypes>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data);
    },
    logout () {
        return instance.delete<APITypes>(`auth/login`).then(response => response.data);
    }
};

export const securityAPI = {
    getCaptchaUrl () {
        return instance.get<{ url: string }>(`security/get-captcha-url`).then(response => response.data);
    },
};
