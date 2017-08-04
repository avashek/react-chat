import React from 'react';
import './App.css';
const TextBox = (props) => {
    let input;
    return (
        <div className="chat-app">
        <form onSubmit={(e)=>{
            e.preventDefault();
            if(input)
                props.handleSend(input);
                e.target.reset()}
                }>
            <input type="text" value={input} onChange={(e) => input = e.target.value}/>
            <input type="submit" value="send" />
        </form>
        </div>
    );
}


export default TextBox;
