import React from 'react';
import './App.css';

class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }
  render() {
    return (
      <div className="chat-box">
        <form className="form" onSubmit={(e) => {
          e.preventDefault();
          if (this.state.input !== ''){
              this.props.handleSend(this.state.input);
              this.setState({input : ''})}
            }}>
          <input type="text" placeholder="Type your message here" value={this.state.input} onChange={(e) => this.setState({input: e.target.value})} />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default TextBox;
