import React  from "react";
import classes from "./Posts.module.css"
const Post=(props)=>{
    // console.log(props.message)
    return(
            <div className={classes.item}>
                <div className={classes.userInfo}>
                    <div className={classes.userAvatar}>
                        <img src={'https://www.pinclipart.com/picdir/middle/155-1559316_male-avatar-clipart.png'} className={classes.avatar}/>
                    </div>
                    <div className={classes.postInfo}>
                        <div className={classes.name__time}>
                            <div className={classes.userName}>
                                Roman Adamovich
                            </div>
                            <div className={classes.time}>
                                10 hours ago
                            </div>
                        </div>
                        <div className={classes.typeOfPost}>
                            posted a post
                        </div>
                    </div>
                </div>
                <div className={classes.postText}>
                    {props.message}
                </div>

                <div className={classes.like}>
                    {props.likesCount}
                </div>
            </div>
    )
}

export default Post;