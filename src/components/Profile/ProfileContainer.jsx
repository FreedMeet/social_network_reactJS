import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getProfileTC, getStatusTC, savePhotoTC, saveProfileTC, updateStatusTC} from '../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.myUserId;
        }

        this.props.getProfileTC(userId);
        this.props.getStatusTC(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    };

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatusTC={this.props.updateStatusTC}
                savePhoto={this.props.savePhotoTC}
                saveProfileTC={this.props.saveProfileTC}
            />
        );
    };
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myUserId: state.auth.userId
});

export default compose(
    connect(mapStateToProps, {getProfileTC, getStatusTC, updateStatusTC, savePhotoTC, saveProfileTC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);