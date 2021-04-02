import classes from './formControls.module.css'
import {FieldValidatorsType} from "../../../utils/validators";
import React, {FC} from "react";
import {Field, WrappedFieldProps} from "redux-form";
import {WrappedFieldMetaProps} from "redux-form/lib/Field";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
};

const FormControl: FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={classes.form}>
            <div>{children}</div>
            <div className={classes.error}>{hasError && <span>{error}</span>}</div>
        </div>
    );
};

export const Textarea: FC<WrappedFieldProps> = (props) => {
    const {meta, children, input, ...restProps} = props;
    return <FormControl {...props}><textarea {...restProps} {...input} /></FormControl>
};

export const Input: FC<WrappedFieldProps> = (props) => {
    const {meta, children, input, ...restProps} = props;
    return <FormControl {...props}><input {...restProps} {...input} /></FormControl>
};

export function createField<FormKeysType extends string>(placeholder: string | undefined, name: FormKeysType,
                                                         validators: Array<FieldValidatorsType>, component: FC<WrappedFieldProps>,
                                                         props = {}, text = '') {
    return (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                validate={validators}
                component={component}
                {...props} />{text}
        </div>
    )
}