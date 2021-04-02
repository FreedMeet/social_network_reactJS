import React, {ChangeEvent, FC, useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {appStateType} from "../../../redux/redux-store"
import {ChatMessageType, sendMessage, startMessagesListening, stopMessagesListening} from "../../../redux/chatReducer";
import Button from "../../Common/button/Button";
import classes from './ChatPageForm.module.css'
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

const ChatPage: FC = () => {
    return (
        <Chat/>
    )
}

const Chat: FC = () => {
    const dispatch = useDispatch()
    const status = useSelector((state: appStateType) => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return (
        <div>
            {status === 'error' && <div>Some error occurred. Please refresh the page</div>}
            <>
                <Messages/>
                <AddMessageForm/>
            </>
        </div>
    )
}

const Messages: FC = () => {
    const messages = useSelector((state: appStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    return (
        <div className={classes.messageBlock} onScroll={scrollHandler}>
            {messages.map((m: ChatMessageType) => <Message key={m.id} message={m}/>)}
            <div ref={messagesAnchorRef}/>
        </div>
    )
}


const Message: FC<{ message: ChatMessageType }> = React.memo(({message}) => {
    const myLogin = useSelector((state: appStateType) => state.auth.login)

    return <div className={classes.message}>
        <div className={classes.messageHeader}>
            <img src={message.photo} alt=''/>
            {message.userName !== myLogin
                ? <span>{message.userName}</span>
                : <span>{message.userName}<b>(You)</b></span>
            }
        </div>
        <p className={classes.messageBody}>{message.message}</p>
        <hr/>
    </div>
})


const AddMessageForm: FC = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const status = useSelector((state: appStateType) => state.chat.status)

    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }

    return <>
        <div className={classes.form}>
            <textarea placeholder={'Your message...'}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.currentTarget.value)}
                      value={message}/>
            <Button width={'100px'} height={'100px'} disabled={status !== 'ready'}
                    onClick={sendMessageHandler}>Send</Button>
        </div>
    </>
}

export default compose(withAuthRedirect)(ChatPage);
