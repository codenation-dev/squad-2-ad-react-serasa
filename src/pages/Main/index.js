import React, { Component } from 'react';

import Input from '../../components/Input';
import Service from '../../services';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      user: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  buscarUsuario = () => {
    const { user } = this.state;

    Service.user(user);
  }

  render() {
    const { user } = this.state;

    return (
      <Input tipo="search" value={user} handleChange={this.handleChange} name="user" onClick={this.buscarUsuario} />
    )
  }
}

export default Main;