import { Header } from './Header';
import { MovieCard } from './MovieCard';
import { MovieProps } from '../types/types';

import '../styles/content.scss';

interface ContentProps {
  movies: Array<MovieProps>;
  selectedGenre: { title: string };
}

export function Content(props: ContentProps) {
  const { movies, selectedGenre } = props;

  return (
    <div className="container">
      <Header title={selectedGenre.title} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}