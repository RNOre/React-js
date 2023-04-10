import React  from "react";
import classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import FriendItem from "./FriendItem/FriendItem";

const Nav=(props)=>{
    return(
    <nav className={classes.nav}>
        <div className={classes.item +" "+classes.profile}>
            <NavLink to={"/profile"} activeclassname={classes.active}>Profile</NavLink>
        </div>
        <div className={classes.item +" "+classes.profile}>
            <NavLink to={"/dialogs"} activeclassname={classes.active}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to={"/news"} activeclassname={classes.active}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to={"/music"} activeclassname={classes.active}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to={"/settings"} activeclassname={classes.active}>Settings</NavLink>
        </div>
        <div className={classes.friendBar}>
            <div className={classes.friendBarTitle}>Friends</div>
            {/*<FriendItem state={props.state}/>*/}
        </div>
    </nav>
    )
}

export default Nav;