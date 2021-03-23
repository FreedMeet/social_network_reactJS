import {ContactsType, ProfileType} from "../../../types/types";
import React, {FC} from "react";

type ProfilePropsType = {
    profile: ProfileType
};
type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

const ProfileData: FC<ProfilePropsType> = ({profile}) =>{
    return (
        <div>
            <p>Looking for a job: <b style={{textTransform: 'uppercase'}}>{profile.lookingForAJob ? 'Yes' : 'No'}</b>
            </p>
            {profile.lookingForAJob && <p>Professional skills: <b>{profile.lookingForAJobDescription}</b></p>}
            <p>About me: <b>{profile.aboutMe}</b></p>
            <div style={{marginBottom:'-10px'}}>
                <h3>Contacts</h3>
                {Object
                    .keys(profile.contacts)
                    .map(key => {
                    return <Contacts key={key} contactTitle={key}
                                     contactValue={profile.contacts[key as keyof ContactsType]
                                         ? profile.contacts[key as keyof ContactsType]
                                         : '==='}/>
                })}
            </div>
        </div>
    )
};

const Contacts: FC<ContactsPropsType> = ({contactTitle, contactValue}) =>{
    return <div>
        <p>{contactTitle}: <b>{contactValue}</b></p>
    </div>
}

export default ProfileData
