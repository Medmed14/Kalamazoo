import React from 'react'
import DefaultPicture from '../../assets/profilPictures/profil.jpg'
import Card from '../../components/Card/index'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardsContainer = styled.div`
display: grid;
padding-right: 10rem;
padding-left: 10rem;
gap: 24px;
grid-template-rows: 350px 350px;
grid-template-columns: repeat(3, 1fr);
align-items: center;
justify-items: center;
`
const TitleFreelances = styled.h1`
    font-size: 1.875rem;
    margin-top: 2.5rem;
    color: #2F2E41;
    font-weight: 600;
    text-align: center;
`
const SubtitleFreelances = styled.h2`
    margin-top: 3.5rem;
    margin-bottom: 5.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: #8186A0;
    text-align: center;


`

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
            <TitleFreelances>Trouvez votre prestataire idéal</TitleFreelances>
            <SubtitleFreelances>Chez Kalamazoo nous réunissons les meilleurs profils pour vous.</SubtitleFreelances>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </div>
    )
}


export default Freelances
