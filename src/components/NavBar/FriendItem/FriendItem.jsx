import classes from "./FriendItem.module.css"
import Friend from "./Friend/Friend";


const FriendItem=(props)=>{
// debugger;
const state=props.state.getState();
    let friendElement=state.friendBar.friends.map(f=> <Friend id={f.id} name={f.name} avatar={f.avatar} status={f.status}/>);

    return(
        <div className={classes.friendsList}>
            {friendElement}
        </div>
    )
}

export default FriendItem;