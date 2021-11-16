import moment from 'moment'
import { useState } from 'react'
import styled from 'styled-components'
import { imageUrl, posterUrl } from '../constants/api'
import { SingleMovie, Type } from '../types/movie'
import TrailerModal from './TrailerModal'

const Container = styled.div<{
  imagePath: string
}>`
  display: flex;
  background-image: url(${(props) => props.imagePath});
  background-size: cover;
`

const CardContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 2em;
`
const CardInner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  color: ${(props) => props.theme.colors.text.contrast};
  width: ${(props) => props.theme.containerWidth};
  margin: auto;
  height: 28.125rem; // 450px

  img {
    width: 18.75rem; // 300px
    height: 28.125rem; // 450px
    object-fit: cover;
    border-radius: ${(props) => props.theme.borderRadius};
  }
`

const Information = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.7em;
  overflow: hidden;

  .tagline {
    color: ${(props) => props.theme.colors.text.gray};
    font-style: italic;
    font-weight: 500;
  }
`

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1ch;

  h1 {
    font-size: 1.75rem; // 28px
  }
  p {
    display: inline-block;
    font-size: 1.625rem; // 26px
    color: ${(props) => props.theme.colors.text.gray};
  }
`

const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1ch;
  font-size: 0.875rem; // 14px

  .date {
    &::before {
      content: '•';
      padding-right: 1ch;
    }
  }
`

const Vote = styled.div<{
  vote: number
}>`
  display: flex;
  flex-direction: row;
  gap: 1ch;
  align-items: center;
  span {
    padding: 0.2em 0.5em;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => {
      switch (true) {
        case props.vote > 7:
          return '#009c1a'
        case props.vote > 5:
          return '#9b9800'
        default:
          return '#af0000'
      }
    }};
  }
`

const TrailerButton = styled.button`
  display: inline-block;
  width: max-content;
  padding: 0.2em 0.7em;
  border-radius: ${(props) => `calc(${props.theme.borderRadius} * 2)`};
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary.base};
  border: 2px solid ${(props) => props.theme.colors.primary.base};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    color: ${(props) => props.theme.colors.primary.hover};
    border: 2px solid ${(props) => props.theme.colors.primary.hover};
  }
`

interface Props {
  movie: SingleMovie
}

const DetailCard: React.FC<Props> = ({ movie }) => {
  const [modalOpen, setmodalOpen] = useState(false)

  const handleWatchTrialClick = () => {
    setmodalOpen(true)
  }

  const closeModal = () => {
    setmodalOpen(false)
  }

  return (
    <>
      <Container imagePath={posterUrl(movie?.backdrop_path as string)}>
        <CardContainer>
          <CardInner>
            <img src={imageUrl(movie?.poster_path as string)} alt="" />
            <Information>
              <Title>
                <h1>{movie.title}</h1>{' '}
                <p>({moment(movie.release_date).format('YYYY')})</p>
              </Title>

              <Subtitle>
                <span>
                  {movie.genres
                    .slice(0, movie.genres.length - 1)
                    .map((item) => item.name + ', ')}
                  {movie.genres
                    .slice(movie.genres.length - 1)
                    .map((item) => item.name)}
                </span>
                <p className="date">
                  {movie.runtime / 60 > 0
                    ? (movie.runtime / 60).toFixed(0) + 'h'
                    : ''}{' '}
                  {(movie.runtime % 60) + 'm'}
                </p>
              </Subtitle>

              <Vote vote={movie.vote_average}>
                Vote Average <span>{movie.vote_average}</span>
              </Vote>

              <TrailerButton onClick={handleWatchTrialClick}>
                Watch Trailer
              </TrailerButton>

              {movie.tagline && <p className="tagline">{movie.tagline}</p>}

              <h3>Overview</h3>

              <p>{movie.overview}</p>
            </Information>
          </CardInner>
        </CardContainer>
      </Container>
      {modalOpen && (
        <TrailerModal
          closeModal={closeModal}
          url={
            movie.videos.results.find((item) => item.type === Type.Trailer)
              ?.key as string
          }
        />
      )}
    </>
  )
}

export default DetailCard
