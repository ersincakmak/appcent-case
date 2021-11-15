import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { imageUrl } from '../contants/api'
import { Result } from '../types/movie'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${(props) => props.theme.borderRadius};
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);

  img {
    height: 100%;
    object-fit: cover;
  }

  :hover .hoverLink {
    transform: translateY(0);
  }

  .hoverLink {
    position: absolute;
    inset: 0;
    background-color: ${(props) => props.theme.colors.primary.hover};
    z-index: 9999;
    transform: translateY(110%);
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Information = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.3em 0.7em;
  position: relative;
  background-color: #e4e4e4;

  p {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.text.contrast};

  :hover {
    text-decoration: underline;
  }
`

interface Props {
  data: Result
}

const Card: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <img src={imageUrl(data.poster_path)} alt="" />
      <Information>
        <p>{data.title}</p>
        <p>Average Vote {data.vote_average}</p>
        <p>{data.release_date}</p>
        <div className="hoverLink">
          <NavLink to={`/movie/${data.id}`}>View Details</NavLink>
        </div>
      </Information>
    </Container>
  )
}

export default Card
