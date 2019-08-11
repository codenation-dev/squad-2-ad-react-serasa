import React, { Fragment } from 'react'

const Repositories = ({ repos }) => (
    <Fragment>
        {repos.map( repo => {
            return (
                <div key={repo.name}>
                    <p><label>Nome: </label><span>{repo.name}</span></p>
                    <p><label>Descrição: </label><span>{repo.description}</span></p>
                </div>
            )   
        } )}
    </Fragment>
)


export default Repositories;