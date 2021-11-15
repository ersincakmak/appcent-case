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

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  flex-direction: column;
`

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <ResetCss />
      <AppContainer>
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
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
