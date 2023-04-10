import React  from "react";
import MyPost from "./MyPosts/MyPosts";
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostsContainer";


const Profile=(props)=>{
     // debugger;
    return(
        <div>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile;