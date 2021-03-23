import classes from "./Dialogs.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../Common/formControls/formControls";
import {required} from "../../utils/validators";
import Button from "../Common/button/Button";
import {FC} from "react";
import {MessageType} from "../../redux/dialogsReducer";

const DialogsForm: FC<InjectedFormProps<MessageType>> = ({handleSubmit}) => {
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Field
                placeholder='You`r message...'
                name={'newMessageText'}
                component={Textarea}
                validate={required}/>
            <Button width={'10%'} height={'104px'}>send</Button>
        </form>
    );
};


export default reduxForm<MessageType>({form: 'dialogs'})(DialogsForm);