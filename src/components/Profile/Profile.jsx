import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css'

const Profile = (props) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatusTC={props.updateStatusTC}
            />

            {props.isOwner && <MyPostsContainer />}

        </div>
    );
}

export default Profile