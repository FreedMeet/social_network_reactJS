import React from 'react'
import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { required } from '../../../utils/validators'
import {Textarea} from '../../Common/formControls/formControls';
import Button from "../../Common/button/Button";
import {useSelector} from "react-redux";

const MyPostForm = ({handleSubmit}) => {
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Field
                placeholder="What happens?"
                name={'newPostText'}
                component={Textarea}
                validate={[required]} />
            <Button width={'20%'} height={'40px'} type='submit'>Add post</Button>
        </form>
    )
};

const MyPostsReduxForm = reduxForm({ form: 'myPosts' })(MyPostForm);

const MyPosts = React.memo(({addPost}) => {
    const PostsData = useSelector(state => state.profilePage.PostsData);

    let PostsElements = PostsData.map(
        post => <Post message={post.message} publishedTime={post.publishedTime} key={post.id}/>
    );

    const onSubmit = (formData) => {
        addPost(formData.newPostText);
    };

    return (
        <div className={classes.posts}>
            <div className={classes.formPost}>
                <MyPostsReduxForm onSubmit={onSubmit}/>
            </div>
            {PostsElements}
        </div>
    );
});

export default MyPosts