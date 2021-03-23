import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <div>
                <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' activeClassName={classes.activeLink}>Dialogs</NavLink>
            </div>
            <div>
                <NavLink to='/users' activeClassName={classes.activeLink}>Find Users</NavLink>
            </div>
            <div>
                <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar