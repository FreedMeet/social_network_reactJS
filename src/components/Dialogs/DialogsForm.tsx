import classes from "./Dialogs.module.css";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Textarea} from "../Common/formControls/formControls";
import {required} from "../../utils/validators";
import Button from "../Common/button/Button";
import {FC} from "react";
import {MessageType} from "../../redux/dialogsReducer";

const DialogsForm: FC<InjectedFormProps<MessageType>> = ({handleSubmit}) => {
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            {createField<MessageFormValueTypeKeys>('You`r message...', 'newMessageText',
            [required], Textarea)}
            <Button width={'100px'} height={'100px'}>send</Button>
        </form>
    );
};

type MessageFormValueTypeKeys = Extract<keyof { newMessageText: string }, string>

export default reduxForm<MessageType>({form: 'dialogs'})(DialogsForm);