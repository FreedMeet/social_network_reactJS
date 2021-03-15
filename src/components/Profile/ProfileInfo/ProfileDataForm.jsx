import classes from "./ProfileInfo.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../Common/formControls/formControls";
import Button from "../../Common/button/Button";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit} >
            <div className={classes.profileFormFields}>
                <Field component={Input} name={'fullName'} placeholder='full name' validate={[]}/>
                <Field component={Textarea} name={'lookingForAJobDescription'} placeholder='professional skills'
                       validate={[]}/>
                <Field component={Textarea} name={'aboutMe'} placeholder='about me' validate={[]}/>
                <div style={{display: 'flex', alignSelf:'flex-start', marginTop:'10px'}}>
                    <span style={{opacity: '.7', width:'300px'}}>Looking for a job:</span>
                    <Field component={Input} type={'checkbox'} name={'lookingForAJob'} validate={[]}/>
                </div>
                <div style={{alignSelf:'flex-start'}}>
                    <h3>Contacts</h3>
                    {Object.keys(profile.contacts).map(key => {
                        return <Field key={key} style={{marginBottom: '5px'}} component={Input} name={'contacts.' + key}
                                      placeholder={key} validate={[]}/>
                    })}
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <Button width={'160px'} height={'31px'} type='submit'>Save Change</Button>
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'profileData'})(ProfileDataForm);

export default ProfileDataReduxForm