import React, { Component } from 'react';
import './style.css';

class Login extends Component {
  render() {
    const { authorize } = this.props;
    return (
      <div className="login-form">
        <h1>Enter the Password</h1>
        <form action="#" onSubmit={authorize}>
          <input type="password" placeholder="Password" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
