import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Service from '../../services/index';

const Repositories = props => {
    const { user } = props.match.params;
    const repos = Service.repositories(user);
    repos.then( rps => {
        
    })
    return (
        <div>
            {repos.map( repo => {
                return (
                    <Fragment>
                        <p><label>Nome: </label><span>{repo.name}</span></p>
                        <p><label>Descrição: </label><span>{repo.description}</span></p>
                    </Fragment>
                )   
            } )}
        </div>
    )
}

export default withRouter(Repositories);