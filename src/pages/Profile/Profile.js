import React from 'react'
import { Link } from 'react-router-dom'

const Profile = props => {
    const { data, repositoriesHandler } = props;
    console.log(props)
    return (
        <div>
            <p><label>Nome: </label><span>{data.name}</span></p>
            <p><label>Bio: </label><span>{data.bio}</span></p>
            <p><label>Localização: </label><span>{data.location}</span></p>
            <p><label>Seguidores: </label><span>{data.followers}</span></p>
            <p><label>Seguindo: </label><span>{data.following}</span></p>
            <p><label>Repositórios: </label><span><a onClick={repositoriesHandler}>{data.public_repos}</a></span></p>
        </div>
    )
}

export default Profile;