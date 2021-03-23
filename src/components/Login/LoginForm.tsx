import {maxLengthCreator, required} from "../../utils/validators";
import classes from "./Login.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/formControls/formControls";
import Button from "../Common/button/Button";
import React, {FC} from "react";
import {ProfileType} from "../../types/types";
import {FormDataType} from "./Login";

type PropsType = {
    captchaUrl: string
}

const maxLength45 = maxLengthCreator(45)

const LoginForm: FC<InjectedFormProps<FormDataType, PropsType> & PropsType> = (
    {handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={classes.loginForm}>
            <Field
                component={Input}
                name={'email'}
                placeholder='email'
                validate={[required, maxLength45]}
            />
            <Field
                component={Input}
                name={'password'}
                placeholder='Password'
                type='password'
                validate={[required, maxLength45]}
            />
            Remember me <Field
            component={Input}
            name={'rememberMe'}
            type='checkbox'
        />
            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl && <Field
                component={Input}
                name={'captcha'}
                placeholder='captcha'
                validate={[required]}
            />}
            <Button width={'300px'} height={'40px'}>login</Button>
            <div style={{marginTop: 10, color: 'red', fontSize: 20}}>{ error }</div>
        </form>
    );
};

export default reduxForm<FormDataType, PropsType>({ form: 'login' })(LoginForm);
