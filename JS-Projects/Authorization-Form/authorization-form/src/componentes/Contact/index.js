import React, { Component } from 'react';
import ContactInfo from '../ContactInfo';
import Login from '../Login';
import './style.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false,
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector('input[type="password"]').value;
    const auth = password === this.state.password;
    this.setState({
      authorized: auth,
    });
  }

  render() {
    const { authorized } = this.state;
    return authorized ? <ContactInfo /> : <Login authorize={this.authorize} />;
  }
}

export default Contact;
