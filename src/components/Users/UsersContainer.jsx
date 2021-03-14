import { connect } from "react-redux";
import React from 'react'
import Users from './Users';
import { followTC, getUsersTC, setCurrentPage, toggleIsFollowingProgress, unFollowTC } from "../../redux/usersReducer";
import Preloader from "../Common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getToggleIsFollowingProgress,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> :
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    followingInProgress={this.props.followingInProgress}
                    followTC={this.props.followTC}
                    unFollowTC={this.props.unFollowTC}
                />}
        </>
    }
}

let mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    toggleIsFollowingProgress: getToggleIsFollowingProgress(state)
});

const UsersContainer = connect(mapStateToProps, {
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers: getUsersTC,
    followTC,
    unFollowTC
})(UsersAPIContainer);

export default UsersContainer;