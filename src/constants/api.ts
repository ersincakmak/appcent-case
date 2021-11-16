import axios from 'axios'

export const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/popular',
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
})

export const getSingleMovie = (id: string) =>
  axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/${id}`,
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      append_to_response: 'videos',
    },
  })

export const getCasts = (id: string) =>
  axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/${id}/credits`,
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  })

export const imageUrl = (url: string) =>
  `https://image.tmdb.org/t/p/w780/${url}`

export const posterUrl = (url: string) =>
  `https://image.tmdb.org/t/p/original/${url}`
