import classes from './Users.module.css'
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";

let Users = ({users, ...props}) => {

    return (
        <div className={classes.profileBlock}>
            <Pagination
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
            />
            {
                users.map(u => <User
                        key={u.id}
                        user={u}
                        followingInProgress={props.followingInProgress}
                        unFollowTC={props.unFollowTC}
                        followTC={props.followTC}
                    />
                )
            };
        </div>
    )
}

export default Users