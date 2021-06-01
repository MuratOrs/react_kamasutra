import React from "react";
import s from './Post.module.css'


const Post = (props) => {
    debugger
    return(

        <div>
            <div className={s.avatar}>
                <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png"
                     alt=""/>
            <button>{props.count}</button>
            <span>{props.message}</span>
            </div>
        </div>
    )
}

export default Post;