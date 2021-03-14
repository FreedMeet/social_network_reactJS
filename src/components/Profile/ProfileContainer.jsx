import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileTC, getStatusTC, updateStatusTC } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import  { withAuthRedirect }  from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.myUserId;
        }

        this.props.getProfileTC(userId);
        this.props.getStatusTC(userId);
    };

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatusTC={this.props.updateStatusTC}
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
    connect(mapStateToProps, { getProfileTC, getStatusTC, updateStatusTC }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);