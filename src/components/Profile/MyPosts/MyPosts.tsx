import React, {FC} from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {useDispatch, useSelector} from "react-redux";
import MyPostForm from "./MyPostsForm";
import {appStateType} from "../../../redux/redux-store";
import {reset} from 'redux-form';

export type PostObjectType = {
    message: string
    publishedTime: string
    id: number
}

type PropsType = {
    addNewPost: (newPostText: string) => void
}

const MyPosts: FC<PropsType> = React.memo(({addNewPost}) => {

    const dispatch = useDispatch()

    const PostsData = useSelector((state: appStateType) => state.profilePage.PostsData);

    let PostsElements = PostsData.map(
        (post: PostObjectType) => <Post
            message={post.message} publishedTime={post.publishedTime} key={post.id}/>
    );

    const onSubmit = (formData: any) => {
        addNewPost(formData.newPostText);
        dispatch(reset('myPosts'))
    };

    return (
        <div className={classes.posts}>
            <div className={classes.formPost}>
                <MyPostForm onSubmit={onSubmit}/>
            </div>
            {PostsElements}
        </div>
    );
});

export default MyPosts