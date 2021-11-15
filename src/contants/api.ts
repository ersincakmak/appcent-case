import axios from 'axios'

export const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/popular',
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
})

export const imageUrl = (url: string) =>
  `https://image.tmdb.org/t/p/w780/${url}`
