import classes from './Post.module.css'

const Post = (props) => {
    return (
            <div className={classes.post}>
                <p>{props.message}</p>
                <span>{props.publishedTime}</span>
            </div>
    );
}

export default Post