import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profilPictures/profil.jpg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 15px;
background-color: ${colors.backgroundLight};
border-radius: 30px;
width: 300px;
height: 300px;
transition: 200ms;
&:hover {
  cursor: pointer;
  box-shadow: 2px 2px 10px #e2e3e9;
}
`
const CardLabel = styled.span`
    margin-top: 1rem;
    margin-left: 1.3rem;
    color:  ${colors.primary};
    font-size: 22px;
    font-weight: 400;
`
const CardImage = styled.img`
    height: 150px;
    width: 150px;
    align-self: center;
    border-radius: 50%;
`
const CardSpan = styled.span`
    text-align: center;
    font-size: 23px;
`

function Card({ label, title, picture }) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardSpan>{title}</CardSpan>
        </CardWrapper>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture,
}
 
export default Card