import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { logoutUserTC } from '../../redux/authReducer';
import classes from "./Header.module.css";
import Button from "../Common/button/Button";
import {NavLink} from "react-router-dom";

const Header = () => {

    const [isAuth, login] = useSelector(state => [
        state.auth.isAuth,
        state.auth.login
    ]);

    const dispatch = useDispatch();
    const logout = useCallback(() => {
        dispatch(logoutUserTC());
    }, [dispatch]);

    return (
        <header>
            <img alt={'logo'} src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"/>

            <div className={classes.loginBlock}>
                {isAuth
                    ? <div>
                        {login} | <Button width={'120px'} height={'40px'} onClick={logout}>Logout</Button>
                    </div>
                    : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header
