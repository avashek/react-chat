import React from 'react';
import './App.css';
const ChatLog = (props) => {
    let log = [];
    let chatlog = props.chatlog;
    chatlog.reverse().map((mess,i) => {
        log.push(<span key={i}><label>{mess.sender}</label> : <label>{mess.message}</label></span>)
    })
    return (
        <div className="chat-log">
        {log}
        </div>
    );
}


export default ChatLog;
