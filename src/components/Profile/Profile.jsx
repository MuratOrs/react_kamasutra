import React from "react";
import s from './Profile.module.css'
import MyPosts from "../MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg" alt=""/>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile