import styled from 'styled-components'
import Jumbotron from '../components/Jumbotron'
import quote from '../contants/quote'

const HomeContainer = styled.div`
  display: flex;
  padding: 1em 0;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.theme.containerWidth};
  margin: auto;
`

const Home = () => {
  return (
    <HomeContainer>
      <Inner>
        <Jumbotron {...quote} />
      </Inner>
    </HomeContainer>
  )
}

export default Home
