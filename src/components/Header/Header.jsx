import React  from "react";
import "./Header.module.css";
import classes from "./Header.module.css"

const Header=()=>{
    return(
        <header className={classes.header}>
            {/*<img src={"C:\\Users\\mi\\React-js\\First-project\\my-app\\src\\components\\Header\\logo.png"}/>*/}
            <img src="https://avatars.mds.yandex.net/i?id=875cd842b160a55baebfb01f044d4c5ed33da380-8497237-images-thumbs&n=13"/>
    </header>
    )
}

export default Header;