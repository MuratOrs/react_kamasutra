import React, {Component} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div>
            <div>
                My posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post name='Murat' message ='How are you?' count='15'/>
                <Post name='Timur' message = "I'm fine" count='20'/>
            </div>
        </div>
    )
}

export default MyPosts