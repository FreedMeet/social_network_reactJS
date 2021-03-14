import React from 'react'
import {HashRouter, Route, withRouter} from 'react-router-dom';
import {connect, Provider} from 'react-redux';
import {initializeAppTC} from "./redux/appReducer";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux-store";
import {compose} from "redux";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {

    componentDidMount() {
        this.props.initializeAppTC()
    };

    render() {

        if (!this.props.initialized) {
            return <Preloader/>;
        }

        return (
            <div className='app-wrapper'>

                <HeaderContainer/>
                <Navbar/>

                <div className='content'>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>

            </div>
        )
    };
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeAppTC})
)(App);

const MainApp = () => {
    return (
        <React.StrictMode>
            <HashRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </HashRouter>
        </React.StrictMode>
    )
};

export default MainApp;