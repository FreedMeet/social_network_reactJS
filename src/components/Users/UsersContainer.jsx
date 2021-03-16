import { useDispatch, useSelector} from "react-redux";
import React, {useCallback, useEffect} from 'react'
import Users from './Users';
import {followTC, getUsersTC, unFollowTC} from "../../redux/usersReducer";
import Preloader from "../Common/Preloader/Preloader";

const UsersContainer = () => {

    const [users, pageSize, totalUsersCount, currentPage, isFetching, followingInProgress] =
        useSelector(state =>
            [
                state.usersPage.users,
                state.usersPage.pageSize,
                state.usersPage.totalUsersCount,
                state.usersPage.currentPage,
                state.usersPage.isFetching,
                state.usersPage.followingInProgress
            ]);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsersTC(currentPage, pageSize));
    }, [currentPage, pageSize, dispatch]);

    const onPageChanged = (pageNumber) => {
        dispatch(getUsersTC(pageNumber, pageSize))
    };

    const follow = useCallback((userId) => {
        dispatch(followTC(userId))
    }, [dispatch]);

    const unFollow = useCallback((userId) => {
        dispatch(unFollowTC(userId))
    }, [dispatch]);


    return <>
        {isFetching ? <Preloader/> :
            <Users
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                users={users}
                followingInProgress={followingInProgress}
                followTC={follow}
                unFollowTC={unFollow}
            />}
    </>
}

export default UsersContainer;