import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../Common/formControls/formControls';
import {required} from '../../utils/validators'
import Button from "../Common/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {sendMessageAC} from "../../redux/dialogsReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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


const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm);

const Dialogs = (props) => {

    const [MessageData, DialogsData] = useSelector(
        state =>
            [
                state.messagePage.MessageData,
                state.messagePage.DialogsData
            ]);

    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        dispatch(sendMessageAC(formData.newMessageText));
    };

    return (
        <div>
            <div className={classes.dialogs}>

                <div className={classes.dialogsItem}>
                    {DialogsData.map(
                        dialog => <DialogsItem name={dialog.name} id={dialog.id} key={dialog.id}/>
                    )}
                </div>

                <div className={classes.messages}>

                    <div className={classes.messagesItem}>
                        {MessageData.map(
                            message => <div key={message.id} className={classes.message}>{message.message}</div>
                        )}
                    </div>

                    <DialogsReduxForm onSubmit={onSubmit}/>

                </div>

            </div>
        </div>
    );
};

export default compose(withAuthRedirect)(Dialogs);