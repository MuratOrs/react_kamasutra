import React, {Component} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.message} count={post.like}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return(
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <div className={s.textArea}><textarea ref={newPostElement}></textarea></div>
                <div className={s.buttons}>
                    <button onClick={addPost}> Add post</button>
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