import React from 'react'
import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { required, maxLengthCreator } from '../../../utils/validators'
import {Textarea} from '../../Common/formControls/formControls';
import Button from "../../Common/button/Button";

const maxLength10 = maxLengthCreator(10);

const MyPostForm = (props) => {
    return (
        <form className={classes.form} onSubmit={props.handleSubmit}>
            <Field
                placeholder="What happens?"
                name={'newPostText'}
                component={Textarea}
                validate={[required, maxLength10]} />
            <Button width={'20%'} height={'40px'} type='submit'>Add post</Button>
        </form>
    )
};

const MyPostsReduxForm = reduxForm({ form: 'myPosts' })(MyPostForm);

class MyPosts extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props || nextState !== this.state;
    }

    render() {

        let PostsElements = this.props.PostsData.map(
            post => <Post message={post.message} publishedTime={post.publishedTime} key={post.id}/>
        );

        const onSubmit = (formData) => {
            this.props.addPostAC(formData.newPostText);
        };

        return (
            <div className={classes.posts}>

                <div className={classes.formPost}>
                    <MyPostsReduxForm onSubmit={onSubmit}/>
                </div>
                {PostsElements}
            </div>
        );
    }
}

export default MyPosts