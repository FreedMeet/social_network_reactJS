import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = (props) => {
    
    return (
        <header>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"></img>

            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>
                        {props.login} | <button onClick={props.logoutUserTC}>Logout</button>
                    </div>
                    : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header