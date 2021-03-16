import React, {useEffect} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {initializeAppTC} from "./redux/appReducer";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


const AppContainer = () => {

    const initialized = useSelector(state => state.app.initialized)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(initializeAppTC())
    }, [dispatch, initialized])

    if (!initialized) {
        return <Preloader/>;
    }
    return (
        <div className='app-wrapper'>

            <HeaderContainer />
            <Navbar/>

            <div className='content'>
                <Switch>

                    <Route exact path="/">
                        <Redirect to="/profile"/>
                    </Route>

                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/dialogs' render={withSuspense(Dialogs)}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='*'
                           render={() => <div style={{textAlign: 'center', fontSize: '30px'}}>
                               Not Found 404
                           </div>}
                    />
                </Switch>
            </div>

        </div>
    )
}

const MainApp = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
};

export default MainApp;


