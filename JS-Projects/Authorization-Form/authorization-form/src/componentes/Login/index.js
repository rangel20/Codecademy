import React, { Component } from 'react';

class Login extends Component {
  render() {
    const { authorize } = this.props;
    return (
      <div>
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
