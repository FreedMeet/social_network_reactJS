import {UsersType} from "../types/types"
import {updateObjectInArray} from "../utils/objectHelpers"
import {CommonThunkType, InferValueTypes} from "./redux-store"
import {Dispatch} from "redux"
import {ResultCode} from "../types/apiType"
import {userAPI} from "../api/userApi";

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}

export type initialStateType = typeof initialState
type ActionsType = InferValueTypes<typeof actions>
type ThunkType = CommonThunkType<ActionsType>
type DispatchType = Dispatch<ActionsType>

const usersReducer = (state = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case "users/FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case "users/UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case "users/SET_USERS":
            return {
                ...state,
                users: action.users
            }
        case "users/SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "users/SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case "users/TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "users/TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}


export const actions = {
    followSuccess: (userId: number) => ({ type: 'users/FOLLOW', userId } as const),
    unfollowSuccess: (userId: number) => ({ type: 'users/UNFOLLOW', userId } as const),
    setUsers: (users: Array<UsersType>) => ({ type: 'users/SET_USERS', users } as const),
    setCurrentPage: (currentPage: number) => ({ type: 'users/SET_CURRENT_PAGE', currentPage } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({ type: 'users/SET_TOTAL_USERS_COUNT', totalUsersCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: 'users/TOGGLE_IS_FETCHING', isFetching } as const),
    toggleIsFollowingProgress: (followingInProgress: boolean, userId: number) => ({
        type: 'users/TOGGLE_IS_FOLLOWING_PROGRESS',
        followingInProgress,
        userId
    } as const)
}

export const getUsersTC = (currentPage: number, pageSize: number): ThunkType =>
    async (dispatch) => {

        dispatch(actions.toggleIsFetching(true))
        dispatch(actions.setCurrentPage(currentPage))

        let data = await userAPI.getUsers(currentPage, pageSize)

        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUsersCount(data.totalCount))
    }

const followUnfollowFlow = async (userId: number, dispatch: DispatchType,
                                  apiMethod: any,
                                  actionCreator: (userId: number) => ActionsType ) => {
    dispatch(actions.toggleIsFollowingProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === ResultCode.Success) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleIsFollowingProgress(false, userId))
}

export const unFollowTC = (userId: number): ThunkType => async (dispatch) => {
    await followUnfollowFlow(userId, dispatch, userAPI.unFollowUser, actions.unfollowSuccess)
}

export const followTC = (userId: number): ThunkType => async (dispatch) => {
    await followUnfollowFlow(userId, dispatch, userAPI.followUser, actions.followSuccess)
}

export default usersReducer