import React, { Component } from 'react';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';

import "./Register.css";

class Register extends Component {
  static contextType = AuthContext;
  
  state = {
    error: ""
  }

  handleSubmit = (email, password, confirm) => {
    if (password !== confirm) {
      return this.setState({ error: "Passwords do not match." });
    }

    API.Users.create(email, password)
      .then(response => response.data)
      .then(user => console.log(user))
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    return (
      <div className="background-picture">
        <div className='Register'>
          <div className='row'>
            <div className='col'>
              <h1>Register</h1>
            </div>
          </div>
          {this.state.error &&
            <div className='row'>
              <div className='col'>
                <div className='alert alert-danger mb-3' role='alert'>
                  {this.state.error}
                </div>
              </div>
            </div>}
          <div className='row'>
            <div className='col'>
              <RegistrationForm onSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
