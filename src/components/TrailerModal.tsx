/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Modal = styled.div`
  display: flex;
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  padding: 1em;

  iframe {
    margin: auto auto;
    width: ${(props) => props.theme.containerWidth};
    aspect-ratio: 16/9;
  }
`

interface Props {
  url: string
  closeModal: () => void
}

const TrailerModal: React.FC<Props> = ({ url, closeModal }) => {
  const ref = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const clickEvent = (e: MouseEvent) => {
      if (ref.current !== e.target) {
        closeModal()
      }
    }
    window.document.addEventListener('click', clickEvent)
    return () => {
      window.document.removeEventListener('click', clickEvent)
    }
  }, [])

  return (
    <Modal>
      <iframe
        ref={ref}
        src={`https://www.youtube.com/embed/${url}`}
        title="Movie Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Modal>
  )
}

export default TrailerModal
