/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import MovieCard from '../components/MovieCard'
import Jumbotron from '../components/Jumbotron'
import { movieApi } from '../constants/api'
import quote from '../constants/quote'
import { MoviesResult, Result } from '../types/movie'
import breakpoints from '../constants/breakpoints'
import ReactPaginate from 'react-paginate'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { useSearchParams } from 'react-router-dom'

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

const Pagination = styled(ReactPaginate)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1ch;

  .page {
    a {
      background-color: ${(props) => props.theme.colors.primary.base};
      padding: 0.2em 0.5em;
      border-radius: ${(props) => props.theme.borderRadius};
      display: flex;
      cursor: pointer;
      color: ${(props) => props.theme.colors.text.contrast};
    }
  }

  .selected {
    a {
      background-color: ${(props) => props.theme.colors.primary.hover};
    }
  }

  .changePage {
    a {
      padding: 0.2em;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.colors.text.contrast};
      background-color: ${(props) => props.theme.colors.primary.base};
      border-radius: ${(props) => props.theme.borderRadius};
      cursor: pointer;
      font-size: 1.3rem;
    }
  }
`

const Home = () => {
  const [movies, setmovies] = useState<Result[]>([])
  const [loading, setloading] = useState(true)
  const [pageCount, setpageCount] = useState(0)

  const [params, setParams] = useSearchParams()

  const ref = useRef<HTMLDivElement>(null)

  const getMovies = async (page: string) => {
    try {
      const { data } = await movieApi.request<MoviesResult>({
        method: 'GET',
        params: {
          page: page,
        },
      })
      setmovies(data.results.filter((item) => item.poster_path))
      setpageCount(data.total_pages)
    } catch (error) {
      setParams({
        page: '1',
      })
    }
  }

  useEffect(() => {
    setloading(true)
    let pageNumber = params.get('page') && Number(params.get('page')).toString()
    getMovies(pageNumber ?? '1').then(() => {
      setloading(false)
    })
  }, [])

  useEffect(() => {
    let pageNumber = params.get('page') && Number(params.get('page')).toString()
    getMovies(pageNumber ?? '1')
  }, [params])

  return (
    <HomeContainer ref={ref}>
      <Inner>
        <Jumbotron {...quote} />
        <h2>Popular Movies</h2>

        {loading === true ? (
          <div>Loading...</div>
        ) : (
          <>
            <MovieGrid>
              {movies.map((item) => (
                <MovieCard key={item.id} data={item} />
              ))}
            </MovieGrid>
            <Pagination
              pageCount={pageCount}
              forcePage={
                params.get('page') ? Number(params.get('page')) - 1 : 0
              }
              marginPagesDisplayed={1}
              pageRangeDisplayed={1}
              previousLabel={<HiOutlineChevronLeft />}
              nextLabel={<HiOutlineChevronRight />}
              nextClassName="changePage"
              previousClassName="changePage"
              pageClassName="page"
              activeClassName="selected"
              breakClassName="page"
              onPageChange={({ selected }) => {
                ref.current?.parentElement?.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
                setParams({
                  page: (selected + 1).toString(),
                })
              }}
            />
          </>
        )}
      </Inner>
    </HomeContainer>
  )
}

export default Home
