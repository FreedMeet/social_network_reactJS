import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css'
import Preloader from "../Common/Preloader/Preloader";
import MyPosts from "./MyPosts/MyPosts";

const Profile = ({isOwner, profile, status, addPost, savePhoto, changeProfile, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.profile}>
            <ProfileInfo
                isOwner={isOwner}
                profile={profile}
                status={status}
                addPost={addPost}
                savePhoto={savePhoto}
                changeProfile={changeProfile}
                updateStatus={updateStatus}
            />

            {isOwner && profile && <MyPosts addPost={addPost} />}

        </div>
    );
}

export default Profile