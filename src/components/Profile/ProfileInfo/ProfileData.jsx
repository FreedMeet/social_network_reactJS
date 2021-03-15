import classes from "./ProfileInfo.module.css";

const ProfileData = ({profile}) =>{
    return (
        <div className={classes.contacts}>
            <p>Looking for a job: <b style={{textTransform: 'uppercase'}}>{profile.lookingForAJob ? 'Yes' : 'No'}</b>
            </p>
            {profile.lookingForAJob && <p>Professional skills: <b>{profile.lookingForAJobDescription}</b></p>}
            <p>About me: <b>{profile.aboutMe}</b></p>
            <div style={{marginBottom:'-10px'}}>
                <h3>Contacts</h3>
                {Object.keys(profile.contacts).map(key => {
                    return <Contacts key={key} contactTitle={key}
                                     contactValue={profile.contacts[key]
                                         ? profile.contacts[key]
                                         : '==='}/>
                })}
            </div>
        </div>
    )
};

const Contacts = ({contactTitle, contactValue}) =>{
    return <div>
        <p>{contactTitle}: <b>{contactValue}</b></p>
    </div>
}

export default ProfileData
