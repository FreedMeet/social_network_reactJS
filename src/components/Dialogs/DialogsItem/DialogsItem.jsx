import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';

const DialogsItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.dialog}>            
            <NavLink to={path} activeClassName={classes.activeLink}>
                {props.name}
            </NavLink>
        </div>
    );
};

export default DialogsItem;