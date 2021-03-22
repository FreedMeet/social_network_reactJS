import React from 'react'
import classes from './Login.module.css'
import {useDispatch, useSelector} from 'react-redux';
import { loginUserTC } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import LoginForm from "./LoginForm";

const Login = () => {

    const [isAuth, captchaUrl] = useSelector(state => [
        state.auth.isAuth,
        state.auth.captchaUrl
    ])

    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        dispatch(loginUserTC(formData.email, formData.password, formData.rememberMe, formData.captcha));
    };

    if(isAuth){
        return <Redirect to={'/profile'} />
    }

    return (
        <div className={classes.login}>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>
    );
};

export default Login;
