import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button
            {...props}
            style={{width: props.width, height: props.height}}
        >
            {props.children}
        </button>
    )
}

export default Button