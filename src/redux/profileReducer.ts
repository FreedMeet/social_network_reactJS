import {PhotosType, ProfileType} from "../types/types"
import {CommonThunkType, InferValueTypes} from "./redux-store"
import {ResultCode} from "../types/apiType"
import {profileAPI} from "../api/profileApi";

let initialState = {
    PostsData: [
        {id: 1, message: "Hi! how are you?", publishedTime: "12:01"},
        {id: 2, message: "It`s my first post", publishedTime: "12:00"},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
}

type PostType = {id: number, message: string, publishedTime: string}
type initialStateType = typeof initialState
type ActionsType = InferValueTypes<typeof actions>
type ThunkType = CommonThunkType<ActionsType>

const profileReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "profile/ADD_POST":
            return {
                ...state,
                PostsData: [...state.PostsData, {id: 3, message: action.newPostText, publishedTime: '13:00'}]
            }
        case "profile/DELETE_POST":
            return {
                ...state,
                PostsData: state.PostsData.filter(p => p.id !== action.postId)
            }
        case "profile/SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "profile/SET_STATUS":
            return {
                ...state,
                status: action.status
            }
        case "profile/SET_PHOTO_SUCCESS":
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state
    }
}

export const actions = {
    addPost: (newPostText: string) => ({type: 'profile/ADD_POST', newPostText} as const),
    deletePost: (postId: number) => ({type: 'profile/DELETE_POST', postId} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'profile/SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'profile/SET_STATUS', status} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'profile/SET_PHOTO_SUCCESS', photos} as const)
}


export const getProfileTC = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data))
}

export const getStatusTC = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))
}

export const updateStatusTC = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === ResultCode.Success) {
        dispatch(actions.setStatus(status))
    }
}

export const savePhotoTC = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === ResultCode.Success) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}

export const saveProfileTC = (profile: ProfileType): ThunkType => async (dispatch
                                                                         , getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === ResultCode.Success) {
        if (userId != null) {
            dispatch(getProfileTC(userId))
        } else {
            throw new Error('userId can`t be null')
        }
    }
}

export default profileReducer