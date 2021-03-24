import React, {FC} from 'react'
import {connect,} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {appStateType} from "../redux/redux-store"

let mapStateToPropsForRedirect = (state: appStateType) => ({
    isAuth: state.auth.isAuth
} as mapPropsType)

type mapPropsType = {
    isAuth: boolean
}

export function withAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {
    const RedirectComponent: FC<mapPropsType> = (props) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as WCP} />
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
