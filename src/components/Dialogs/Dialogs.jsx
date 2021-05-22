import React, {Component} from "react";
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
              <div className={s.dialogsItems}>
                  <div className={s.dialog + ' ' + s.active}>Murat</div>
                  <div className={s.dialog}>Timur</div>
                  <div className={s.dialog}>Bosya</div>
                  <div className={s.dialog}>Andy</div>
                  <div className={s.dialog}>Alex</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi, how are you?</div>
                <div className={s.message}>Hi</div>
                <div className={s.message}>What do you do?</div>
            </div>
        </div>
    )
}

export default Dialogs;
