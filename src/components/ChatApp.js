import React, { Component } from 'react';
import './App.css';
import TextBox from './TextBox';
import io from 'socket.io-client';

const socket = io('http://192.168.1.145:4040');

socket.on('bc',(data)=>{console.log(data)});

class ChatApp extends Component {
  constructor(){
    super();
    this.state = {
      currentMessage : '',
      chatlog : [],
    };
    this.handleSend = this.handleSend.bind(this);
  }
  handleSend(message){
    console.log(message);
    this.setState({
      currentMessage : message,
    },()=>{
      socket.emit('event',message,"useragent",(log)=>{
      this.setState({chatlog : log});
    })});

    
  }
  render() {
    return (
      <div className="chat-app">
        <TextBox handleSend={this.handleSend}/>
      </div>
    );
  }
}

export default ChatApp;
