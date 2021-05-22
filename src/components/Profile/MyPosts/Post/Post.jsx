import React from "react";
import s from './Post.module.css'


const Post = (props) => {
 //   console.log(props)
    return (
        <div>
            <div className={s.avatar}>
                <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png"
                     alt=""/>
            </div>
            <div className={s.item}><div className={s.name}>{props.name}</div>{props.message}</div>
            <div className={s.reputatie}>
                <button>{props.count} Like</button>
            </div>
        </div>
    )
}

export default Post;