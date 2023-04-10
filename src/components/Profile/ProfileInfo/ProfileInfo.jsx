import classes from "./ProfileInfo.module.css"
import React from "react";

const ProfileInfo=(props)=>{
    return(
        <div className={classes.profileInfo}>
            <div className={classes.backgroundImg__wrapper}>
                {/*<img className={classes.backgroundImg}  src={'https://wordpress.iqonic.design/product/wp/socialv/wp-content/themes/socialv-themes/assets/images/redux/default-cover.jpg'}/>*/}
            </div>
            <div className={classes.avatar__wrapper}>
                <img className={classes.content__avatar} src={"https://www.pinclipart.com/picdir/middle/155-1559316_male-avatar-clipart.png"}/>
            </div>
            <div className={classes.personalInfo}>
                <div className={classes.personalInfo__name}>
                    Roman Adamovich
                </div>
                <div className={classes.personalInfo__address}>
                    Orenburg
                </div>
                <div className={classes.personalInfo__stats}>
                    <div className={classes.personalInfo__stats__posts}>
                        7 <br/> Posts
                    </div>
                    <div className={classes.personalInfo__stats__Comments}>
                        10 <br/> Comments
                    </div>
                    <div className={classes.personalInfo__stats__Friends}>
                        5 <br/> Friends
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;