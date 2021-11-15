import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  padding: 0.5em 1em;
  background-color: ${(props) => props.theme.colors.primary.base};
`

const Inner = styled.div`
  width: ${(props) => props.theme.containerWidth};
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const NavLink = styled(Link)`
  font-size: 1rem;
  padding: 0.2em 0.5em;
  color: inherit;
  color: ${(props) => props.theme.colors.text.contrast};
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: 1.125rem;
  user-select: none;

  :hover {
    text-decoration: underline;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: max-content;
  gap: 1em;
`

const Logo = styled.h1`
  color: ${(props) => props.theme.colors.primary.hover};
  user-select: none;
`

const Header = () => {
  return (
    <Container>
      <Inner>
        <Logo>EMDB</Logo>
        <Links>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </Links>
      </Inner>
    </Container>
  )
}

export default Header