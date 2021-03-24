import classes from "./ProfileInfo.module.css";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../Common/formControls/formControls";
import Button from "../../Common/button/Button";
import {ContactsType, ProfileType} from "../../../types/types";
import {FC} from "react";

type PropsType = {
    profile: ProfileType
}

type ProfileDataTypes = {
    fullName: string
    lookingForAJobDescription: string
    aboutMe: string
    lookingForAJob: boolean
}

const ProfileDataForm: FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = (
    {handleSubmit, profile}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.profileFormFields}>
                {createField<DataFormValuesTypeKeys>('full name', "fullName",
                    [], Input)}
                {createField<DataFormValuesTypeKeys>('professional skills', "lookingForAJobDescription",
                    [], Textarea)}
                {createField<DataFormValuesTypeKeys>('about me', "aboutMe",
                    [], Textarea)}
                <div style={{display: 'flex', alignSelf: 'flex-start', marginTop: '10px'}}>
                    <span style={{opacity: '.7', width: '300px'}}>Looking for a job:</span>
                    {createField<DataFormValuesTypeKeys>(undefined, "lookingForAJob",
                        [], Input, {type: 'checkbox'})}
                </div>
                <div style={{alignSelf: 'flex-start'}}>
                    <h3>Contacts</h3>
                    {Object.keys(profile.contacts).map(key => {
                        return createField(key, 'contacts.' + key,
                            [], Input, {key: key, style: {marginBottom: '5px'}})
                    })}
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <Button width={'160px'} height={'31px'}>Save Change</Button>
            </div>
        </form>
    )
}

type DataFormValuesTypeKeys = Extract<keyof ProfileDataTypes, string>

const ProfileDataReduxForm = reduxForm<ProfileType, PropsType>({form: 'profileData'})(ProfileDataForm);

export default ProfileDataReduxForm