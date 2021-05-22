import React, {Component} from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
              <div className={s.dialogsItems}>
                  <DialogItem name='Murat' id='1'/>
                  <DialogItem name='Timur' id='2'/>
                  <DialogItem name='Bodya' id='3'/>
                  <DialogItem name='Alex' id='4'/>
                  <DialogItem name='Martine' id='5'/>
                  <DialogItem name='Nikola' id='6'/>
            </div>
            <div className={s.messages}>
               <Message message='How are you?'/>
               <Message message='Hi, super!'/>
               <Message message='What is jour name?'/>
               <Message message='My name is Alex'/>
               <Message message='How old are you?'/>
               <Message message='im 20 years old'/>
            </div>
        </div>
    )
}

export default Dialogs;
