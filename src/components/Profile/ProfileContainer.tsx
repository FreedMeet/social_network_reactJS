import React, {useEffect, useCallback, FC} from 'react';
import Profile from './Profile';
import {useDispatch, useSelector} from 'react-redux';
import {
    actions,
    getProfileTC,
    getStatusTC,
    savePhotoTC,
    saveProfileTC,
    updateStatusTC
} from '../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {appStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";

type MatchType = {
    params: {userId: number}
    isExact: boolean
    path: string
    url: string
};

type PropsType = {
    match: MatchType
};

const ProfileContainer: FC<PropsType> = ({match: {params: {userId}}}) => {

    const profile = useSelector((state: appStateType) => state.profilePage.profile)
    const status = useSelector((state: appStateType) => state.profilePage.status)
    const myUserId = useSelector((state: appStateType) => state.auth.userId)

    const dispatch = useDispatch();

    const refreshProfile = useCallback(() => {
        let currentUserId = userId;

        if (!currentUserId) {
            currentUserId = myUserId;
        }
        dispatch(getProfileTC(currentUserId));
        dispatch(getStatusTC(currentUserId));
    }, [userId, dispatch, myUserId]);

    useEffect(() => {
        refreshProfile()
    }, [userId, refreshProfile]);

    const addNewPost = useCallback((newPostText: string) => {
        dispatch(actions.addPost(newPostText));
    }, [dispatch]);

    const savePhoto = useCallback((file: any) => {
        dispatch(savePhotoTC(file));
    }, [dispatch]);

    const changeProfile = useCallback((formData: ProfileType) => {
        dispatch(saveProfileTC(formData));
    }, [dispatch]);

    const updateStatus = useCallback((statusValue: string) => {
        dispatch(updateStatusTC(statusValue));
    }, [dispatch]);


    return (
        <Profile
            isOwner={!userId}
            profile={profile}
            status={status}
            addNewPost={addNewPost}
            savePhoto={savePhoto}
            changeProfile={changeProfile}
            updateStatus={updateStatus}
        />
    );
};

export default compose<React.ComponentType>(withRouter, withAuthRedirect)(ProfileContainer);