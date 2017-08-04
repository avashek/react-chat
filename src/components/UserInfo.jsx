import React from 'react';
import './App.css';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }
  render() {
    return (
      <div className="user-info">
          <label className="username">Welcome <input type="text" placeholder="Enter your name" value={this.state.input} onChange={(e) => {
            this.setState({input: e.target.value},()=>{
              this.props.handleChangeName(this.state.input);
            });
            }} /></label>
      </div>
    );
  }
}


export default UserInfo;
