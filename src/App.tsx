import React, {FC, useEffect} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Provider, useDispatch, useSelector} from 'react-redux'
import {initializeAppTC} from "./redux/appReducer"
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Preloader from "./components/Common/Preloader/Preloader"
import store, {appStateType} from "./redux/redux-store"
import {withSuspense} from "./hoc/withSuspense"
import HeaderWithHooks from "./components/Header/Header"

const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

const SuspendedDialogs = withSuspense(Dialogs)
const SuspendedProfile = withSuspense(ProfileContainer)

const AppContainer: FC = () => {

    const initialized = useSelector((state: appStateType) => state.app.initialized)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [dispatch, initialized])

    if (!initialized) {
        return <Preloader/>
    }

    return (
        <div className='app-wrapper'>

            <HeaderWithHooks/>
            <Navbar/>

            <div className='content'>
                <Switch>

                    <Route exact path="/">
                        <Redirect to="/profile"/>
                    </Route>

                    <Route path='/profile/:userId?' render={() => <SuspendedProfile />}/>
                    <Route path='/dialogs' render={() => <SuspendedDialogs />}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/news' render={() => <div>Page In Developing</div>}/>
                    <Route path='/music' render={() => <div>Page In Developing</div>}/>
                    <Route path='/settings' render={() => <div>Page In Developing</div>}/>
                    <Route path='*'
                           render={() => <div>
                               Not Found 404
                           </div>}
                    />
                </Switch>
            </div>

        </div>
    )
}

const MainApp: FC = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default MainApp


