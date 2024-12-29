export interface IMovie {
  id: number
  name: string
  description: string
  duration: string
  rating: number
  poster: string
  genre: 'drama' | 'comedy' | 'thriller' | 'action'
}

export interface IMovieWithDetails extends IMovie {
  trivia: string[]
  actors: ActorProps[]
}

interface ActorProps {
  name: string
  imdb_id: string
}
