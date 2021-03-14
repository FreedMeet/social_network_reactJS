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
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar