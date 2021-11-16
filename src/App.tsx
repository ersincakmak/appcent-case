import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import NotFound from './pages/NotFound'
import styled, { ThemeProvider } from 'styled-components'
import baseTheme from './theme/baseTheme'
import ResetCss from './theme/ResetCss'
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  flex-direction: column;
`

const ScrollTop = styled.div`
  position: absolute;
  bottom: 1.25rem; // 20px
  right: 1.875rem; // 30px
  padding: 0.4em 0.7em;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary.hover};
  color: ${(props) => props.theme.colors.text.contrast};
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 99999;
  display: flex;
  align-items: center;
  gap: 1ch;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  opacity: 0.4;

  svg {
    font-size: 1.2rem;
  }

  :hover {
    opacity: 1;
  }
`

const App = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = ref.current?.scrollTop
      if (scrolled && scrolled > ref.current.offsetHeight / 2) {
        setVisible(true)
      } else if (scrolled && scrolled <= ref.current.offsetHeight / 2) {
        setVisible(false)
      }
    }

    const myElement = ref.current

    myElement?.addEventListener('scroll', toggleVisible)

    return () => {
      myElement?.removeEventListener('scroll', toggleVisible)
    }
  }, [])

  const scrollTopHandler = () => {
    ref.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <ThemeProvider theme={baseTheme}>
      <ResetCss />
      <AppContainer ref={ref}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        {visible && (
          <ScrollTop onClick={scrollTopHandler}>
            <AiOutlineArrowUp /> Scroll To Top
          </ScrollTop>
        )}
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
