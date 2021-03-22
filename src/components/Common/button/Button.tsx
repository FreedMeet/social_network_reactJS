import React, {FC} from 'react'
import classes from './Button.module.css'

type PropsType = {
    width: string
    height: string
    className?: string
    disabled?: boolean
    onClick?:(event: React.MouseEvent) => void
}

const Button: FC<PropsType> = ({width, height, ...props}) => {
    return (
        <button className={classes.btn}
            {...props}
            style={{width: width, height: height}}
        >
            {props.children}
        </button>
    )
}

export default Button