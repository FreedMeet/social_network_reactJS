import classes from "./Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/formControls/formControls";
import {required} from "../../utils/validators";
import Button from "../Common/button/Button";

const DialogsForm = (props) => {
    return (
        <form className={classes.form} onSubmit={props.handleSubmit}>
            <Field
                placeholder='You`r message...'
                name={'newMessageText'}
                component={Textarea}
                validate={required}/>
            <Button width={'10%'} height={'104px'}>send</Button>
        </form>
    );
};


export default reduxForm({form: 'dialogs'})(DialogsForm);