import React, {Component} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        { id: 1, message: 'How are you?', like: 15},
        { id: 2, message: 'Im fine', like: 65},
        { id: 3, message: 'bla', like: 65},
        { id: 4, message: 'bla bla bla', like: 65},
        { id: 5, message: 'be be be', like: 65},
        { id: 6, message: 'lo lo lo', like: 65},
        { id: 7, message: 'ki ki ki', like: 65},
    ]
 let postsElements = postsData.map(post => <Post name={post.name} message ={post.message} count={post.like}/>)

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts