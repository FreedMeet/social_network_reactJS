import {maxLengthCreator, required} from "../../utils/validators";
import classes from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/formControls/formControls";
import Button from "../Common/button/Button";
import React from "react";

const maxLength45 = maxLengthCreator(45)

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
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
            <Button width={'300px'} height={'40px'} type='submit'>login</Button>
            <div style={{marginTop: 10, color: 'red', fontSize: 20}}>{ error }</div>
        </form>
    );
};

export default reduxForm({ form: 'login' })(LoginForm);
