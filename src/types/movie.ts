export interface MoviesResult {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export interface Result {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: Date
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface SingleMovie {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: BelongsToCollection
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: OriginalLanguage
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: Date
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  videos: Videos
}

export interface BelongsToCollection {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

export interface Genre {
  id: number
  name: string
}

export enum OriginalLanguage {
  En = 'en',
}

export interface ProductionCompany {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: OriginalLanguage
  name: string
}

export interface Videos {
  results: Video[]
}

export interface Video {
  iso_639_1: OriginalLanguage
  iso_3166_1: ISO3166_1
  name: string
  key: string
  site: Site
  size: number
  type: Type
  official: boolean
  published_at: string
  id: string
}

export enum ISO3166_1 {
  Us = 'US',
}

export enum Site {
  YouTube = 'YouTube',
}

export enum Type {
  Clip = 'Clip',
  Featurette = 'Featurette',
  Teaser = 'Teaser',
  Trailer = 'Trailer',
}

export interface Credits {
  id: number
  cast: Cast[]
  crew: Cast[]
}

export interface Cast {
  adult: boolean
  gender: number
  id: number
  known_for_department: Department
  name: string
  original_name: string
  popularity: number
  profile_path: null | string
  cast_id?: number
  character?: string
  credit_id: string
  order?: number
  department?: Department
  job?: string
}

export enum Department {
  Acting = 'Acting',
  Art = 'Art',
  Camera = 'Camera',
  CostumeMakeUp = 'Costume & Make-Up',
  Crew = 'Crew',
  Directing = 'Directing',
  Editing = 'Editing',
  Production = 'Production',
  Sound = 'Sound',
  VisualEffects = 'Visual Effects',
  Writing = 'Writing',
}
