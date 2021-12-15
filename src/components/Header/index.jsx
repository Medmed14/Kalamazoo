import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../assets/logo/K-logo.png'
 
const StyledNav = styled.nav`
    padding:2.811rem;
    
    
`
const StyledLogo = styled.img`
    height: 4.974rem;
    margin-right: 1rem;
    vertical-align: middle;
`

const StyledSpan = styled.span`
    font-family: 'Poiret One', cursive;
    font-weight: bold;
    font-size: 2rem;

`

const StyledLink = styled(Link)`
    float:right;
    padding-top: 0.488rem;
    padding-right: 1.563rem;
    padding-bottom: 0.588rem;
    padding-left: 1.563rem;
    margin-top: 0.4rem;
    color: #8186a0;
    text-decoration: none;
    font-size: 1.125rem;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 1.875rem; background-color: ${colors.primary};`}
`
function Header() {
    return (
    <StyledNav>
        <StyledLogo src={logo} alt="K logo"/><StyledSpan>KALAMAZOO</StyledSpan>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
            Faire le test
        </StyledLink>
        
    </StyledNav>
    )
}

export default Header