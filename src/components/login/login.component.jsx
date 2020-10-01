import React, { Component } from "react";
import "./login.style.scss";

import { signInWithGoogle } from "../../firebase/firebase.utils";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handlesubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  handlechange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='logIn'>
        <h1>
          U<span className='colorPri'>B</span>
        </h1>
        <form onSubmit={this.handlesubmit} className='form'>
          <input
            className='form-input'
            placeholder='a01@email.com'
            type='email'
            onChange={this.handlechange}
            value={this.state.email}
            name='email'
            required
          />
          <label className='form-input-label'>Email</label>
          <input
            className='form-input'
            type='password'
            onChange={this.handlechange}
            value={this.state.password}
            name='password'
            required
          />
          <label className='form-input-label'>Password</label>
          <input className='submit' type='submit' value='Log in' />
        </form>
        <button className='google' onClick={signInWithGoogle}>
          Sign with GOOGLE
        </button>
      </div>
    );
  }
}

export default Login;
