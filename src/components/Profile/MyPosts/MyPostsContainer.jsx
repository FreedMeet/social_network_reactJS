import { connect } from 'react-redux';
import { addPostAC } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'

let mapStateToProps = (state) => {
    let profilePage = state.profilePage
    return {
        PostsData: profilePage.PostsData,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPostAC: (newPostText) => {
            debugger;
            dispatch(addPostAC(newPostText));
        },
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer