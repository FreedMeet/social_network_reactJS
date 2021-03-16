import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import Button from "../Common/button/Button";

const Header = ({isAuth, login, logoutUserTC}) => {

    return (
        <header>
            <img alt={'logo'} src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"/>

            <div className={classes.loginBlock}>
                {isAuth
                    ? <div>
                        {login} | <Button width={'120px'} height={'40px'} onClick={logoutUserTC}>Logout</Button>
                    </div>
                    : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header