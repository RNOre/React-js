import React  from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Posts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";

const MyPost=(props)=>{
    let postElement=props.posts.map(p=><Post message={p.message} likesCount={p.likesCount}/>);

    const newPostElement=React.createRef();

    const onAddPost=()=>{
        props.onAddPost();
    }

    const onPostChange=()=>{
        const text=newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return(
        <div className={classes.myPost__wrapper}>
            <div className={classes.addPost}>
                    <textarea className={classes.addPost__textArea}
                        ref={newPostElement} value={props.newPostText}
                    onChange={onPostChange} placeholder={'Write post...'}/>
                    <button className={classes.addPost__btn}
                        onClick={onAddPost}>Add post</button>
            </div>
            {postElement}
        </div>
    )
}

export default MyPost;