import styled from 'styled-components'

const JumbotronContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5em;
  background-color: ${(props) => props.theme.colors.primary.hover};
  color: ${(props) => props.theme.colors.text.contrast};
  gap: 1em;
  font-size: 1.25rem; // 20px
  border-radius: ${(props) => props.theme.borderRadius};

  p::selection {
    background-color: ${(props) => props.theme.colors.primary.base};
  }
`

interface Props {
  message: string
  author: string
}

const Jumbotron: React.FC<Props> = ({ author, message }) => {
  return (
    <JumbotronContainer>
      <p>"{message}"</p>
      <p>-{author}</p>
    </JumbotronContainer>
  )
}

export default Jumbotron
