import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img src="https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg" alt=""/>
            </div>
            <div className={s.avatar}>
                <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png"
                     alt=""/>
            </div>
            <div>
                My posts
            </div>
            <div>
                New post
            </div>
           <div className={s.posts}>
               <div className={s.item}>post 1</div>
               <div className={s.item}>post 2</div>
           </div>
        </div>
    )
}

export default Profile