import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import Jumbotron from '../components/Jumbotron'
import { movieApi } from '../contants/api'
import quote from '../contants/quote'
import { MoviesResult, Result } from '../types/movie'
import breakpoints from '../contants/breakpoints'

const HomeContainer = styled.div`
  display: flex;
  padding: 1em;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: ${(props) => props.theme.containerWidth};
  margin: auto;
`

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1em;

  @media only screen and (max-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: ${breakpoints.xs}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Home = () => {
  const [movies, setmovies] = useState<Result[]>([])
  const [loading, setloading] = useState(true)

  const getMovies = async () => {
    setloading(true)
    const { data } = await movieApi.request<MoviesResult>({
      method: 'GET',
    })
    setmovies(data.results)
    setloading(false)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <HomeContainer>
      <Inner>
        <Jumbotron {...quote} />
        <h2>Popular Movies</h2>
        {loading === true ? (
          <div>Loading...</div>
        ) : (
          <MovieGrid>
            {movies.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </MovieGrid>
        )}
      </Inner>
    </HomeContainer>
  )
}

export default Home
