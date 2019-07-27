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

  buscarUsuario = async () => {
    const { user } = this.state;

    const response = await Service.user(user);
  }

  render() {
    const { user } = this.state;

    return (
      <Input tipo="search" value={user} handleChange={this.handleChange} name="user" onClick={this.buscarUsuario} />
    )
  }
}

export default Main;