import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return(
     <div>
         <div className='content-img'>
             <img src="https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg" alt=""/>
         </div>
         <div className={s.descriptionBlock}>
             <div>Ava + desq</div>
         </div>
     </div>
    )
}

export default ProfileInfo;