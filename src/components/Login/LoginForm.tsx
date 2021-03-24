import {maxLengthCreator, required} from "../../utils/validators";
import classes from "./Login.module.css";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../Common/formControls/formControls";
import Button from "../Common/button/Button";
import React, {FC} from "react";
import {FormDataType} from "./Login";

type PropsType = {
    captchaUrl: string
}

const maxLength45 = maxLengthCreator(45)

const LoginForm: FC<InjectedFormProps<FormDataType, PropsType> & PropsType> = (
    {handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={classes.loginForm}>
            {createField<LoginFormValueTypeKeys>('email', 'email',
                [required, maxLength45], Input)}
            {createField<LoginFormValueTypeKeys>('Password', 'password',
                [required, maxLength45],
                Input, {type: 'password'})}
            {createField<LoginFormValueTypeKeys>(undefined, 'rememberMe',
                [], Input, {type: 'checkbox'}, 'Remember me')}
            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl && createField<LoginFormValueTypeKeys>('captcha', 'captcha',
                [required], Input)}
            <Button width={'300px'} height={'40px'}>login</Button>
            <div style={{marginTop: 10, color: 'red', fontSize: 20}}>{error}</div>
        </form>
    );
};

type LoginFormValueTypeKeys = Extract<keyof FormDataType, string>

export default reduxForm<FormDataType, PropsType>({form: 'login'})(LoginForm);
