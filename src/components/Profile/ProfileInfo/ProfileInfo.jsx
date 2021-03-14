import classes from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/Preloader'
import userPhoto from '../../../assets/images/users.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import Button from "../../Common/button/Button";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhotoTC(e.target.files[0])
        }
    };

    return (
        <div className={classes.profilePage}>

            <div>
                <img src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto}/>
                <div className={classes.profileInfo}>
                    <div className={classes.profileName}>
                        {props.profile.fullName}
                    </div>
                    <div style={{marginTop: '-20px'}}>
                        <ProfileStatusWithHooks status={props.status} updateStatusTC={props.updateStatusTC}/>
                    </div>
                </div>
            </div>
            {props.isOwner &&
            <div className={classes.file_upload}>
                <Button width={'150px'} height={'30px'}>Change photo</Button>
                <input type="file" onChange={onMainPhotoSelected}/>
            </div>
            }


            <div className={classes.contacts}>
                <h3>Contacts</h3>
                <p>facebook: <a href='#'>{props.profile.contacts.facebook}</a></p>
                <p>website: <a href='#'>{props.profile.contacts.website}</a></p>
                <p>vk: <a href='#'>{props.profile.contacts.vk}</a></p>
                <p>twitter: <a href='#'>{props.profile.contacts.twitter}</a></p>
                <p>instagram: <a href='#'>{props.profile.contacts.instagram}</a></p>
                <p>youtube: <a href='#'>{props.profile.contacts.youtube}</a></p>
                <p>github: <a href='#'>{props.profile.contacts.github}</a></p>
                <p>mainLink: <a href='#'>{props.profile.contacts.mainLink}</a></p>
            </div>
        </div>
    )
}


export default ProfileInfo