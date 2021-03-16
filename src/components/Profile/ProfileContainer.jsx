import React, {useEffect, useCallback} from 'react';
import Profile from './Profile';
import {useDispatch, useSelector} from 'react-redux';
import {
    addPostAC,
    getProfileTC,
    getStatusTC,
    savePhotoTC,
    saveProfileTC,
    updateStatusTC
} from '../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

const ProfileContainer = ({match: {params: {userId}}, props}) => {

    const [profile, status, myUserId] = useSelector(
        state => [
            state.profilePage.profile,
            state.profilePage.status,
            state.auth.userId
        ]
    );
    const dispatch = useDispatch();

    const refreshProfile = useCallback(() => {
        let currentUserId = userId;

        if (!currentUserId) {
            currentUserId = myUserId;
        }
        dispatch(getProfileTC(currentUserId));
        dispatch(getStatusTC(currentUserId));
    }, [userId, dispatch]);

    useEffect(() => {
        refreshProfile()
    }, [userId, refreshProfile]);

    const addPost = useCallback((newPostText) => {
        dispatch(addPostAC(newPostText));
    }, [dispatch]);

    const savePhoto = useCallback((file) => {
        dispatch(savePhotoTC(file));
    }, [dispatch]);

    const changeProfile = useCallback((formData) => {
        dispatch(saveProfileTC(formData));
    }, [dispatch]);

    const updateStatus = useCallback((statusValue) => {
        dispatch(updateStatusTC(statusValue));
    }, [dispatch]);


    return (
        <Profile
            isOwner={!userId}
            profile={profile}
            status={status}
            addPost={addPost}
            savePhoto={savePhoto}
            changeProfile={changeProfile}
            updateStatus={updateStatus}
        />
    );
};

export default compose(withRouter, withAuthRedirect)(ProfileContainer);