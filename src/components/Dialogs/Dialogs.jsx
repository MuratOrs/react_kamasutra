import React, {Component} from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
              <div className={s.dialogsItems}>
                  <div className={s.dialog + ' ' + s.active}>
                      <NavLink to="/dialogs/1">Murat</NavLink>
                  </div>
                  <div className={s.dialog}>
                      <NavLink to="/dialogs/2">Timur</NavLink>
                  </div>
                  <div className={s.dialog}>
                      <NavLink to="/dialogs/3">Bosya</NavLink>
                  </div>
                  <div className={s.dialog}>
                      <NavLink to="/dialogs/4">Alex</NavLink>
                  </div>
                  <div className={s.dialog}>
                      <NavLink to="/dialogs/5">Vlad</NavLink>
                  </div>
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
