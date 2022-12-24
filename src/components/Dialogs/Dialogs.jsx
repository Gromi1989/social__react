import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messageElement = state.messages.map(message => <Message message={message.messages} key={message.id}/>)
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Navigate to={'/login'}/>

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messageElement}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    );
};
export default Dialogs;