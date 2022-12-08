import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialodItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElement = props.state.messages.map(message => <Message message={message.messages}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElement}
            </div>
        </div>

    );
};
export default Dialogs;