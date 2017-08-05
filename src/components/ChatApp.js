import React, { Component } from 'react';
import './App.css';
import TextBox from './TextBox';
import UserInfo from './UserInfo';
import ChatLog from './ChatLog';
import io from 'socket.io-client';

const socket = io('http://192.168.1.145:4040');


class ChatApp extends Component {
  constructor(){
    super();
    this.state = {
      currentMessage : '',
      uname : '',
      chatlog : [],
    };
    this.handleSend = this.handleSend.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }
  componentDidMount(){
    console.log("ChatApp mount");
    socket.on('bc',(data)=>{
      console.log(data);
      if(Object.keys(this.state)){
        let templog = this.state.chatlog;
        templog.push(data);
        this.setState({chatlog : templog});
      }
    });
  }
  handleSend(message){
    //console.log(message);
    this.setState({
      currentMessage : message,
    },()=>{
      if(message && this.state.uname)
      socket.emit('event',message,this.state.uname)
    });
  }
  handleChangeName(uname){
    //console.log(uname);
    this.setState({
      uname : uname,
    });
  }
  render() {
    return (
      <div className="chat-app">
        <UserInfo handleChangeName={this.handleChangeName} uname={this.state.uname}/>
        <ChatLog chatlog={this.state.chatlog}/>
        <TextBox handleSend={this.handleSend}/>
      </div>
    );
  }
}

export default ChatApp;
