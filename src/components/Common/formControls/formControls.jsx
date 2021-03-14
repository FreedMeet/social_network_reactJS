import classes from './formControls.module.css'

const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={ classes.form }>
            <div>{children}</div>
            <div className={classes.error}>{ hasError && <span>{error}</span> }</div>
        </div>
    );
}

export const Textarea = (props) => {
    const {meta, children, input, ...restProps} = props;
    return <FormControl {...props}><textarea { ...restProps } { ...input } /></FormControl>
};

export const Input = (props) => {
    const {meta, children, input, ...restProps} = props;
    return <FormControl {...props}><input { ...restProps } { ...input } /></FormControl>
};

