import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import Button from "../Common/button/Button";

const Header = (props) => {
    
    return (
        <header>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"></img>

            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>
                        {props.login} | <Button width={'120px'} height={'40px'} onClick={props.logoutUserTC}>Logout</Button>
                    </div>
                    : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header