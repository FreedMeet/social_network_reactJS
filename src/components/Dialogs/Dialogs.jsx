import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import React from 'react'
import { Field, reduxForm } from 'redux-form';
import {Textarea} from '../Common/formControls/formControls';
import { required } from '../../utils/validators'

const DialogsForm = (props) => {
    return (
        <form className={classes.form} onSubmit={props.handleSubmit}>
            <Field 
            placeholder='You`r message...' 
            name={'newMessageText'} 
            component={Textarea}
            validate={ required } />
            <button type='submit'>send</button>
        </form>
    );
};



const DialogsReduxForm = reduxForm({ form: 'dialogs' })(DialogsForm);

const Dialogs = (props) => {

    let DialogsElements = props.DialogsData.map(
        dialog => <DialogsItem name={dialog.name} id={dialog.id} key={dialog.id} />
    );

    let MessagesElements = props.MessageData.map(
        message => <Message message={message.message} key={message.id} />
    );

    const onSubmit = (formData) => {
        props.sendMessageAC(formData.newMessageText);
    };

    return (
        <div>
            <div className={classes.dialogs}>

                <div className={classes.dialogsItem}>
                    {DialogsElements}
                </div>

                <div className={classes.messages}>

                    <div className={classes.messagesItem}>
                        {MessagesElements}
                    </div>

                    <DialogsReduxForm onSubmit={onSubmit} />
                    
                </div>

            </div>
        </div>
    );
};

export default Dialogs;