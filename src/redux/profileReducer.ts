import {profileAPI} from "../api/api";
import {PhotosType, ProfileType} from "../types/types";

const ADD_POST = 'profile/ADD_POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SET_PHOTO_SUCCESS = 'profile/SET_PHOTO_SUCCESS';

export type PostType = {
    id: number
    message: string
    publishedTime: string
};

let initialState = {
    PostsData: [
        {id: 1, message: "Hi! how are you?", publishedTime: "12:01"},
        {id: 2, message: "It`s my first post", publishedTime: "12:00"},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
};

export type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                PostsData: [...state.PostsData, {id: 3, message: action.newPostText, publishedTime: '13:00'}]
            };
        case DELETE_POST:
            return {
                ...state,
                PostsData: state.PostsData.filter(p => p.id !== action.postId)
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            };
        default:
            return state;
    }
};

type addPostActionType = {
    type: typeof ADD_POST
    newPostText: string
};
export const addPost = (newPostText: string): addPostActionType => ({type: ADD_POST, newPostText});

type deletePostActionType = {
    type: typeof DELETE_POST
    postId: number
};
export const deletePost = (postId: number): deletePostActionType => ({type: DELETE_POST, postId});

type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
};
export const setUserProfile = (profile: ProfileType): setUserProfileActionType => ({type: SET_USER_PROFILE, profile});

type setStatusActionType = {
    type: typeof SET_STATUS
    status: string
};
export const setStatus = (status: string): setStatusActionType => ({type: SET_STATUS, status});

type savePhotoSuccessActionType = {
    type: typeof SET_PHOTO_SUCCESS
    photos: PhotosType
};
export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessActionType => ({type: SET_PHOTO_SUCCESS, photos});

export const getProfileTC = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
};

export const getStatusTC = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
};

export const updateStatusTC = (status: string) => async (dispatch: any) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhotoTC = (file: any) => async (dispatch: any) => {
    let data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
};

export const saveProfileTC = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        dispatch(getProfileTC(userId));
    }
};

export default profileReducer;