import classes from './Post.module.css'
import {FC} from "react";

type PropsType = {
    message: string
    publishedTime: string
}

const Post: FC<PropsType> = ({message, publishedTime}) => {
    return (
            <div className={classes.post}>
                <p>{message}</p>
                <span>{publishedTime}</span>
            </div>
    );
}

export default Post