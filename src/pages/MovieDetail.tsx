/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import CastCard from '../components/CastCard'
import DetailCard from '../components/DetailCard'
import { getCasts, getSingleMovie } from '../constants/api'
import breakpoints from '../constants/breakpoints'
import { Cast, Credits, SingleMovie } from '../types/movie'
import NotFound from './NotFound'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  width: ${(props) => props.theme.containerWidth};
  margin-inline: auto;
`

const CastGrid = styled.div`
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

const MovieDetail = () => {
  const [movie, setmovie] = useState<SingleMovie>()
  const [casts, setcasts] = useState<Cast[]>([])
  const [loading, setloading] = useState(false)

  const { id } = useParams()

  const getMovieInformation = async () => {
    setloading(false)

    try {
      const { data } = await getSingleMovie(id as string).request<SingleMovie>({
        method: 'GET',
      })
      setmovie(data)
    } catch (error) {}
    setloading(true)
  }

  const getCastHandler = async () => {
    const { data } = await getCasts(id as string).request<Credits>({
      method: 'GET',
    })
    setcasts(data.cast)
  }

  useEffect(() => {
    getMovieInformation()
    getCastHandler()
  }, [])

  if (!loading) {
    return null
  }

  if (!movie) {
    return <NotFound />
  }

  return (
    <>
      <DetailCard movie={movie} />
      <Container>
        <h2>Casts</h2>
        <CastGrid>
          {casts
            .filter((item) => item.profile_path)
            .map((item) => (
              <CastCard key={item.cast_id} cast={item} />
            ))}
        </CastGrid>
      </Container>
    </>
  )
}

export default MovieDetail
