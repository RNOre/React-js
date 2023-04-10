import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageCreator, updateNewBodyCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps=(state)=>{
    return{
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        updateNewMessageBody:(body)=>{
            dispatch(updateNewBodyCreator(body));
        },
        SendMessage:()=>{
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer=connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;