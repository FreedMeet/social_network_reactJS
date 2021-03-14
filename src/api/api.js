import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e8633e93-5002-4074-b903-3b066895cdeb'
    }
});

export const userAPI = {
    getUsers (currentPage = 1, pageSize = 3) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    followUser (userId) {
        return instance.post(`follow/`+ userId).then(response => response.data);
    },
    unFollowUser (userId) {
        return instance.delete(`follow/`+ userId).then(response => response.data);
    }
};

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/` + userId).then(response => response.data);
    },
    getStatus (userId) {
        return instance.get(`profile/status/` + userId).then(response => response.data);
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {status: status}).then(response => response.data);
    },
    savePhoto (photoFile) {
        let formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            'Content-Type': 'multipart/form-data'
        }).then(response => response.data);
    }
};

export const authAPI = {
    getMyProfile () {
        return instance.get(`auth/me`).then(response => response.data);
    },
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data);
    },
    logout () {
        return instance.delete(`auth/login`).then(response => response.data);
    }
};
