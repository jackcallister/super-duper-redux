import React from 'react';

export default class Session extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(e) {
    this.setState({
      email: e.currentTarget.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.currentTarget.value
    });
  }

  render() {
    return (
      <form action='/sessions' method='post'>
        <label>Email</label>
        <input value={this.state.email}
               onChange={this.handleEmailChange}
               name='email' />

        <label>Password</label>
        <input type='password'
               value={this.state.password}
               onChange={this.handlePasswordChange}
               name='password' />

        <input type='submit' value='Submit' />
      </form>
    );
  }
}
