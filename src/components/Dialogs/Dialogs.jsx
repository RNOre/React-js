import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageCreator, updateNewBodyCreator} from "../../redux/dialog-reducer";

const Dialogs=(props)=>{

    const state=props.dialogsPage;

    let dialogsElement= state.dialogs.map(d=><DialogItem name={d.name} id={d.id} />);
    let messagesElements= state.messages.map(m=><Message message={m.message} direction={m.direction}/>);

    const newMessageBody=state.newMessageBody;
    const onSendMessageClick=()=>{
        props.SendMessage();
    }

    const sendMessageRef=React.createRef();

    const onNewMessageChange=(e)=>{
        const body=e.target.value;
        props.updateNewMessageBody(body);
    }

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.statusBar}>

                <div className={classes.statusBar__interlocutor}>
                    <div className={classes.name} >Name</div>
                    <div className={classes.statusBar__online}>online</div>
                </div>
                <img className={classes.avatar} src={"https://p.turbosquid.com/ts-thumb/16/JBPfFR/6zKTBGVd/male_body_image_01/jpg/1398764294/1920x1080/fit_q99/d56876205fc344dc8359919e3f840f67920c7c1d/male_body_image_01.jpg"}/>
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div className={classes.messageForm}>
                <textarea ref={sendMessageRef} className={classes.messageForm__textArea}
                          placeholder={"Write message..."} value={newMessageBody}
                          onChange={onNewMessageChange}
                ></textarea>
                <div onClick={onSendMessageClick} className={classes.messageForm__btn}></div>
            </div>
        </div>
    )
}

export default Dialogs;