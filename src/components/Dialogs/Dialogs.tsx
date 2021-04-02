import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import {useDispatch, useSelector} from "react-redux";
import {actions, DialogType, MessageType} from "../../redux/dialogsReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import DialogsForm from "./DialogsForm";
import {appStateType} from "../../redux/redux-store";
import {reset} from "redux-form";

const Dialogs = () => {

    const MessageData = useSelector((state: appStateType) => state.messagePage.MessageData)
    const DialogsData = useSelector((state: appStateType) => state.messagePage.DialogsData)

    const dispatch = useDispatch();

    const onSubmit = (formData: any) => {
        dispatch(actions.sendMessage(formData.newMessageText));
        dispatch(reset('dialogs'))
    };

    return (
        <div>
            <div className={classes.dialogs}>

                <div className={classes.dialogsItem}>
                    {DialogsData.map(
                        (dialog: DialogType) =>
                            <DialogsItem name={dialog.name} id={dialog.id} key={dialog.id}/>
                    )}
                </div>

                <div className={classes.messages}>

                    <div className={classes.messagesItem}>
                        {MessageData.map(
                            (message: MessageType) =>
                                <div key={message.id} className={classes.message}>{message.message}</div>
                        )}
                    </div>

                    <DialogsForm onSubmit={onSubmit}/>

                </div>

            </div>
        </div>
    );
};

export default compose(withAuthRedirect)(Dialogs);