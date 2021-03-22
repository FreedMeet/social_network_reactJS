import classes from './Users.module.css'
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";
import {UsersType} from "../../types/types";
import {FC} from "react";

type PropsType = {
    users: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
    unFollowTC: (userId: number) => void
    followTC: (userId: number) => void
}

let Users: FC<PropsType> = ({users, ...props}) => {
    return (
        <div className={classes.profileBlock}>
            <Pagination
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
            />
            {
                users.map(u => <User
                        key={u.id}
                        user={u}
                        followingInProgress={props.followingInProgress}
                        unFollowTC={props.unFollowTC}
                        followTC={props.followTC}
                    />
                )
            };
        </div>
    )
}

export default Users