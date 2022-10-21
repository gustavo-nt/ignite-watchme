import { useMovies } from "../hooks/useMovies";

import { Header } from "./Header";
import { MovieCard } from "./MovieCard";

import "../styles/content.scss";
import { Loading } from "./loading";

export function Content() {
  const { movies, isLoading } = useMovies();

  return (
    <div className="container">
      <Header />

      <main>
        {isLoading ? (
          <div className="movies-loading">
            <Loading />
          </div>
        ) : (
          <div className="movies-list">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                poster={movie.poster_path}
                rating={movie.vote_average}
                releaseDate={movie.release_date}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
