import classes from "../Dialogs.module.css";

const Message=(props)=>{
    if(props.direction) {
        return (
            <div className={classes.messageFromMeWrapper}>
                <div className={classes.messageFromMe}>{props.message}</div>
            </div>
        )
    }
    return(
        <div className={classes.messageToMeWrapper}>
            <div className={classes.messageToMe}>{props.message}</div>
        </div>
        )
}
export default Message;