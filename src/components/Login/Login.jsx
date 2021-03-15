import React from 'react'
import { Field, reduxForm } from 'redux-form';
import classes from './Login.module.css'
import { Input } from '../Common/formControls/formControls'
import { required, maxLengthCreator } from '../../utils/validators'
import { connect } from 'react-redux';
import { loginUserTC } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import Button from "../Common/button/Button";

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

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginUserTC(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }

    return (
        <div className={classes.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {loginUserTC})(Login);
