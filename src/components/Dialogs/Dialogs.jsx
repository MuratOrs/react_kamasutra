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
    let dialogsData = [
        { id: 1, name: 'Murat',},
        { id: 2, name: 'Timur'},
        { id: 3, name: 'Bosya'},
        { id: 4, name: 'Bosya'},
        { id: 5, name: 'Alex'},
        { id: 6, name: 'Martine'},
        { id: 7, name: 'Nikola'},
    ]

    let messagesData = [
        {id: 1, message: 'How are you?'},
        {id: 2, message: 'Hi, super!'},
        {id: 3, message: 'What is jour name?'},
        {id: 4, message: 'My name is Alex'},
        {id: 5, message: 'im 20 years old'},
    ]

    return (
        <div className={s.dialogs}>
              <div className={s.dialogsItems}>
                  <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                  <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>


            </div>
            <div className={s.messages}>
               <Message message={messagesData[0].message}/>
               <Message message={messagesData[1].message}/>
            </div>
        </div>
    )
}

export default Dialogs;
