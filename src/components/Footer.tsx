/* eslint-disable react/jsx-no-target-blank */
import styled from 'styled-components'

const Container = styled.div`
  margin-top: auto;
  display: flex;
  background-color: ${(props) => props.theme.colors.primary.hover};
  color: ${(props) => props.theme.colors.text.contrast};
`

const Inner = styled.div`
  padding: 1em;
  width: ${(props) => props.theme.containerWidth};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem; // 18px
  a {
    color: inherit;
    text-decoration: underline;
  }
`

const Footer = () => {
  return (
    <Container>
      <Inner>
        <p>
          You can reach source code of this project on{' '}
          <a href="https://github.com/ersincakmak/appcent-case" target="_blank">
            this link
          </a>
          .
        </p>
      </Inner>
    </Container>
  )
}

export default Footer
