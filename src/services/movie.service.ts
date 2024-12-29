import type { IMovie, IMovieWithDetails } from '@/types/interfaces'
import axios from 'axios'

const BASE_URL = '/data'

const request = (method: 'get', url: string) =>
  axios({
    method,
    url,
    baseURL: BASE_URL,
  }).then((response) => response.data)

const movieService = {
  getAll: async (): Promise<IMovie[]> =>
    request('get', '/data.json').then((response) => response.items),
  getById: async (_movieId: number | string): Promise<IMovieWithDetails> =>
    request('get', '/detail.json'),
}

export { movieService }
