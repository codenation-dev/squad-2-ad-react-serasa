import React, { Component, Fragment } from 'react';

import Input from '../../components/Input';
import Service from '../../services';
import { Route } from 'react-router-dom'

import Profile from '../Profile/Profile'
import Repositories from '../../components/Repositories/Repositories'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userData: false,
      repositories: false
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  buscarUsuario = async () => {
    const { userName } = this.state;

    const response = await Service.user(userName);
    this.setState({userData: response});
  }

  repositoriesHandler = async () => {
    const { userName } = this.state;

    const response = await Service.repositories(userName);
    this.setState({repositories: response});
  }

  render() {
    const { userName } = this.state;

    return (
      <Fragment>
        <Input tipo="search" value={userName} handleChange={this.handleChange} name="userName" onClick={this.buscarUsuario} />
        { this.state.userData ? <Profile data={this.state.userData} /> : null }
        <Route path="/repositories/:user" render={() => <Repositories repositories={this.state.repositories} />} />
      </Fragment>
    )
  }
}

export default Main;