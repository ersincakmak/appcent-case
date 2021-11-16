import styled from 'styled-components'
import { imageUrl } from '../constants/api'
import { Cast } from '../types/movie'

const CastContainer = styled.div`
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
`

const Information = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.5em 1em;
  background-color: rgba(0, 0, 0, 0.75);
  color: ${(props) => props.theme.colors.text.contrast};
  display: flex;
  flex-direction: column;
  gap: 0.3em;

  .name {
    font-weight: 600;
    font-size: 1rem;
  }

  .character {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.text.gray};
  }
`

interface Props {
  cast: Cast
}

const CastCard: React.FC<Props> = ({ cast }) => {
  return (
    <CastContainer>
      <img src={imageUrl(cast.profile_path as string)} alt="" />
      <Information>
        <p className="name">{cast.original_name}</p>
        <p className="character">{cast.character}</p>
      </Information>
    </CastContainer>
  )
}

export default CastCard
