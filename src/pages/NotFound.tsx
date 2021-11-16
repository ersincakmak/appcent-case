import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto auto;
  font-size: 50px; // 75px
  color: ${(props) => props.theme.colors.primary.base};

  .notfound {
    line-height: 1;
    font-size: 9.375rem; // 150px
    color: ${(props) => props.theme.colors.primary.hover};
    font-style: italic;
    .zero {
      color: ${(props) => props.theme.colors.primary.base};
    }
  }
`

const NotFound = () => {
  return (
    <Container>
      <Text>
        <p className="notfound">
          <span className="firstfour">4</span>
          <span className="zero">0</span>
          <span className="secondfour">4</span>
        </p>
        <div>Not Found</div>
      </Text>
    </Container>
  )
}

export default NotFound
