import {APIResponseType} from "../types/apiType";
import {instance} from "./api";
import {UsersType} from "../types/types";

export type getUsersResType = {
    items: Array<UsersType>
    totalCount: number
    error: string | null
}

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 3) {
        return instance.get<getUsersResType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followUser(userId: number) {
        return instance.post<APIResponseType>(`follow/` + userId).then(response => response.data);
    },
    unFollowUser(userId: number) {
        return instance.delete<APIResponseType>(`follow/` + userId).then(response => response.data);
    }
};