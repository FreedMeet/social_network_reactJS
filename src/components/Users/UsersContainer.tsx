import {useDispatch, useSelector} from "react-redux"
import {useCallback, useEffect} from 'react'
import {FilterType, followTC, getUsersTC, unFollowTC} from "../../redux/usersReducer"
import {appStateType} from "../../redux/redux-store"
import classes from "./Users.module.css";
import Preloader from "../Common/Preloader/Preloader";
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";
import {UsersSearchForm} from "./UsersSearchForm";
import {UsersType} from "../../types/types";

const UsersContainer = () => {

    const users = useSelector((state: appStateType) => state.usersPage.users)
    const pageSize = useSelector((state: appStateType) => state.usersPage.pageSize)
    const totalUsersCount = useSelector((state: appStateType) => state.usersPage.totalUsersCount)
    const currentPage = useSelector((state: appStateType) => state.usersPage.currentPage)
    const isFetching = useSelector((state: appStateType) => state.usersPage.isFetching)
    const followingInProgress = useSelector((state: appStateType) => state.usersPage.followingInProgress)
    const filter = useSelector((state: appStateType) => state.usersPage.filter)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize, filter))
    }, [])

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsersTC(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsersTC(1, pageSize, filter))
    }

    const follow = useCallback((userId: number) => {
        dispatch(followTC(userId))
    }, [dispatch])

    const unFollow = useCallback((userId: number) => {
        dispatch(unFollowTC(userId))
    }, [dispatch])


    return <>
        <div className={classes.profileBlock}>
            {isFetching ? <Preloader/> :
                <div className={classes.usersBlock}>
                    <Pagination totalUsersCount={totalUsersCount} pageSize={pageSize}
                                currentPage={currentPage} onPageChanged={onPageChanged}
                    />
                    {
                        users.map((u: UsersType) => <User key={u.id} user={u} followingInProgress={followingInProgress}
                                             unFollowTC={unFollow} followTC={follow}
                            />
                        )
                    }
                </div>}

            <UsersSearchForm onFilterChanged={onFilterChanged}/>
        </div>
    </>
}

export default UsersContainer