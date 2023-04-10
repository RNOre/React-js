import React from "react";
import Post from "./Post/Posts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPosts";
import {connect} from "react-redux";
const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText:(text) => {
            dispatch(updateNewPostActionCreator(text));
        },
        onAddPost:()=>{
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost);
export default MyPostContainer;