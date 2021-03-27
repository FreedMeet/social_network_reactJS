import React from 'react'
import classes from './Login.module.css'
import {useDispatch, useSelector} from 'react-redux';
import { loginUserTC } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import LoginForm from "./LoginForm";
import {appStateType} from "../../redux/redux-store";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

const Login = () => {

    const isAuth = useSelector((state: appStateType) => state.auth.isAuth)
    const captchaUrl = useSelector((state: appStateType) => state.auth.captchaUrl)

    const dispatch = useDispatch();

    const onSubmit = (formData: FormDataType) => {
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
