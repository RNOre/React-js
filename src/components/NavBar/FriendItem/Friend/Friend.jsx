import classes from "./Friend.module.css"
const Friend=(props)=>{
    // debugger;
    return(
        <div className={classes.friendCard}>
            <img src={props.avatar} className={classes.avatar}/>
            <div className={classes.name}>{props.name}</div>
        </div>
    )
}

export default Friend;