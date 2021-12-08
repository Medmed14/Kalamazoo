import React from 'react'
import DefaultPicture from '../assets/profilPictures/profil.jpg'

function Freelances() {

    const freelanceProfiles = [
        {
            name: 'Jane Doe',
            jobTitle: 'Devops',
            picture: DefaultPicture,
        },
        {
            name: 'John Doe',
            jobTitle: 'Developpeur frontend',
            picture: DefaultPicture,
        },
        {
            name: 'Jeanne Biche',
            jobTitle: 'Développeuse Fullstack',
            picture: DefaultPicture,
        },
    ]

    return (
        <div>
            <h1>Freelances</h1>
        </div>
    )
}

export default Freelances
