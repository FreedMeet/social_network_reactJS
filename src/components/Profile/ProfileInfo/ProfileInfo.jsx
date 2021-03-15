import {useState} from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/Preloader'
import userPhoto from '../../../assets/images/users.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import Button from "../../Common/button/Button";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";

const ProfileInfo = ({profile, savePhotoTC, updateStatusTC, status, isOwner, saveProfileTC}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhotoTC(e.target.files[0])
        }
    };

    const onSubmit = (formData) => {
        saveProfileTC(formData).then(
            setEditMode(false)
        );

    }

    return (
        <div className={classes.profilePage}>

            <div>
                <img alt={'mainPhoto'} src={profile.photos.small != null ? profile.photos.small : userPhoto}/>
                <div className={classes.profileInfo}>
                    <div className={classes.profileName}>
                        {profile.fullName}
                    </div>
                    <div style={{marginTop: '-20px'}}>
                        <ProfileStatusWithHooks status={status} updateStatusTC={updateStatusTC}/>
                    </div>
                </div>
            </div>
            {isOwner &&
            <div style={{display: 'flex'}}>
                <div style={{marginRight: '10px'}} className={classes.file_upload}>
                    <Button width={'150px'} height={'30px'}>Change photo</Button>
                    <input type="file" onChange={onMainPhotoSelected}/>
                </div>
                {!editMode && <Button onClick={() => {
                    setEditMode(true)
                }} width={'160px'} height={'31px'}>Edit profile</Button>}
            </div>
            }
            {editMode
                ? <ProfileDataForm onSubmit={onSubmit} initialValues={profile} profile={profile}/>
                : <ProfileData profile={profile}/>}
        </div>
    )
}

export default ProfileInfo