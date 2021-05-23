import React, {Component} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        { id: 1, message: 'How are you?', like: 15},
        { id: 2, message: 'Im fine', like: 65},
    ]
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
                <Post name={postsData[0].name} message ={postsData[0].message} count={postsData[0].like}/>
                <Post name={postsData[1].name}  message ={postsData[1].message} count={postsData[1].like}/>

            </div>
        </div>
    )
}

export default MyPosts