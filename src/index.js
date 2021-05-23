import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

React.createElement('div',null,'Simple div with text');
React.createElement('input', {className:'just-class'});

let posts = [
    { id: 1, message: 'How are you?', like: 15},
    { id: 2, message: 'Im fine', like: 65},
    { id: 3, message: 'bla', like: 65},
    { id: 4, message: 'bla bla bla', like: 65},
    { id: 5, message: 'be be be', like: 65},
    { id: 6, message: 'lo lo lo', like: 65},
    { id: 7, message: 'ki ki ki', like: 65},
]
let dialogs = [
    { id: 1, name: 'Murat',},
    { id: 2, name: 'Timur'},
    { id: 3, name: 'Bosya'},
    { id: 5, name: 'Alex'},
    { id: 6, name: 'Martine'},
    { id: 7, name: 'Nikola'},
]
let messages = [
    {id: 1, message: 'How are you?'},
    {id: 2, message: 'Hi, super!'},
    {id: 3, message: 'What is jour name?'},
    {id: 4, message: 'My name is Alex'},
    {id: 5, message: 'im 20 years old'},
    {id: 7, message: 'You are pretty woman'},
]



ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
