import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "../../redux/dialogsReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import DialogsForm from "./DialogsForm";

const Dialogs = () => {

    const [MessageData, DialogsData] = useSelector(
        state =>
            [
                state.messagePage.MessageData,
                state.messagePage.DialogsData
            ]);

    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        dispatch(sendMessage(formData.newMessageText));
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

                    <DialogsForm onSubmit={onSubmit}/>

                </div>

            </div>
        </div>
    );
};

export default compose(withAuthRedirect)(Dialogs);