import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';
import {FC} from "react";

type PropsType = {
    id: number
    name: string
}

const DialogsItem: FC<PropsType> = ({id, name}) => {

    let path = '/dialogs/' + id;

    return (
        <div className={classes.dialog}>            
            <NavLink to={path} activeClassName={classes.activeLink}>
                {name}
            </NavLink>
        </div>
    );
};

export default DialogsItem;