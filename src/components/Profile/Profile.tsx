import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css'
import Preloader from "../Common/Preloader/Preloader";
import MyPosts from "./MyPosts/MyPosts";
import {FC} from "react";
import {ProfilePageInfoType} from "../../types/types";

type PropsType = ProfilePageInfoType & {addNewPost: (newPostText: string) => void}

const Profile: FC<PropsType> = ({isOwner, profile, status,
                                    addNewPost, savePhoto, changeProfile,
                                    updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.profile}>
            <ProfileInfo isOwner={isOwner} profile={profile}
                status={status} savePhoto={savePhoto}
                changeProfile={changeProfile} updateStatus={updateStatus}
            />

            {isOwner && profile && <MyPosts addNewPost={addNewPost} />}

        </div>
    );
}

export default Profile