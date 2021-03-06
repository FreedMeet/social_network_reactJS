import classes from './Users.module.css'
import userPhoto from '../../assets/images/users.png'
import {NavLink} from 'react-router-dom'
import Button from "../Common/button/Button"
import React, {FC} from 'react'
import {UsersType} from "../../types/types"
import {useSelector} from "react-redux";
import {appStateType} from "../../redux/redux-store";

type PropsType = {
    user: UsersType
    followingInProgress: Array<number>
    unFollowTC: (userId: number) => void
    followTC: (userId: number) => void
}

export const User: FC<PropsType> = React.memo(({user, followingInProgress, unFollowTC, followTC}) => {

    const isAuth = useSelector((state: appStateType) => state.auth.isAuth)

    return (
        <div key={user.id} className={classes.profileCard}>
            <div className={classes.profilePhoto}>
                <NavLink exact to={'/profile/' + user.id}>
                    <img alt='userAvatar' className={classes.userAvatar}
                         src={user.photos.small != null ? user.photos.small : userPhoto}/>
                </NavLink>
                { isAuth ? <div>
                    {user.followed
                        ? <Button
                            width={'150px'}
                            height={'40px'}
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unFollowTC(user.id)
                            }}>unfollow</Button>
                        : <Button
                            width={'150px'}
                            height={'40px'}
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                followTC(user.id)
                            }}>follow</Button>
                    }
                </div> : <div></div>}
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
})