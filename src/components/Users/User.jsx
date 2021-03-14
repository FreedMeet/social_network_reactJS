import classes from './Users.module.css'
import userPhoto from '../../assets/images/users.png'
import {NavLink} from 'react-router-dom';

let Users = ({user, followingInProgress, unFollowTC, followTC}) => {
    return (
        <div key={user.id} className={classes.profileCard}>
            <div className={classes.profilePhoto}>
                <NavLink exact to={'/profile/' + user.id}>
                    <img alt='userAvatar' className={classes.userAvatar}
                         src={user.photos.small != null ? user.photos.small : userPhoto}/>
                </NavLink>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unFollowTC(user.id)
                              }}>unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  followTC(user.id)
                              }}>follow</button>}
            </div>
            <div className={classes.profileInfo}>
                <div className={classes.profileName}>
                    <p>{user.name}</p>
                    <br/>
                    <span>{user.status}</span>
                </div>
                <div className={classes.profileLocation}>
                    {'user.location.city'}, {'user.location.country'}
                </div>
            </div>

        </div>)
};

export default Users