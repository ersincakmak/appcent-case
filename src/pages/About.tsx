import styled from 'styled-components'

const Container = styled.div`
  width: ${(props) => props.theme.containerWidth};
  margin-inline: auto;
  padding: 1em 0;
`

const About = () => {
  return (
    <Container>
      <h1>About</h1>
    </Container>
  )
}

export default About
