import React, {Component} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <div className={s.textArea}><textarea></textarea></div>
                <div className={s.buttons}>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post name='Murat' message ='How are you?' count='15'/>
                <Post name='Timur' message = "I'm fine" count='25'/>
            </div>
        </div>
    )
}

export default MyPosts