import React, { Component, Fragment } from 'react';
import Input from '../../components/Input';
import Service from '../../services';
import Profile from '../Profile/Profile'
import Repositories from '../../components/Repositories/Repositories'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      data: false,
      repositories: false
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  buscarUsuario = async () => {
    const { username } = this.state;

    const data = await Service.user(username);
    const repositories = await Service.repositories(username);
    
    this.setState({data, repositories});
  }

  render() {
    const { username, data, repositories } = this.state;

    return (
      <Fragment>
        <Input tipo="search" value={username} handleChange={this.handleChange} name="username" onClick={this.buscarUsuario} />
        { data ? <Profile data={data} /> : null }
        { repositories ? <Repositories repos={repositories} /> : null }
      </Fragment>
    )
  }
}

export default Main;