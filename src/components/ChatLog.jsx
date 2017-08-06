import React from 'react';
import './App.css';
import glamorous from 'glamorous';

const Span = glamorous.span({
    padding: '5px',
    paddingLeft: '20px',
    paddingRight: '15px',
    margin: '2px',
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: '50px'
    },
    (props)=>({
        alignSelf : props.right?'flex-end' : 'flex-start',
    })
)

const ChatLog = (props) => {
    let log = [];
    let chatlog = Object.assign([], props.chatlog);
    chatlog.reverse().map((mess, i) =>
        log.push(<Span key={i} ><label>{mess.sender}</label><label>{mess.message}</label></Span>)
    )
    return (
        <div className="chat-log">
            {log}
        </div>
    );
}


export default ChatLog;
