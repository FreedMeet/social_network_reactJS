import classes from './Post.module.css'

const Post = ({message, publishedTime}) => {
    return (
            <div className={classes.post}>
                <p>{message}</p>
                <span>{publishedTime}</span>
            </div>
    );
}

export default Post