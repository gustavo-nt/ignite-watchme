import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface MoviesContextProps {
  isLoading: boolean;
  movies: MovieProps[];
  selectedGenreId: number;
  genres: GenreResponseProps[];
  selectedGenre: GenreResponseProps;
  handleClickButton: (id: number) => void;
}

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export const MoviesContext = createContext({} as MoviesContextProps);

const MoviesProvider: React.FC = ({ children }) => {
  const [selectedGenreId, setSelectedGenreId] = useState(28);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [genres] = useState<GenreResponseProps[]>([
    {
      id: 28,
      name: "action",
      title: "Ação",
    },
    {
      id: 35,
      name: "comedy",
      title: "Comédia",
    },
    {
      id: 99,
      name: "documentary",
      title: "Documentário",
    },
    {
      id: 18,
      name: "drama",
      title: "Drama",
    },
    {
      id: 27,
      name: "horror",
      title: "Terror",
    },
    {
      id: 10751,
      name: "family",
      title: "Família",
    },
  ]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  useEffect(() => {
    setIsLoading(true);

    api
      .get<MovieProps[]>(
        `/discover/movie?with_genres=${selectedGenreId}&language=${process.env.TMDB_API_LANGUAGE}&api_key=${process.env.TMDB_API_KEY}`
      )
      .then((response: any) => {
        setMovies(response.data.results);
      });

    setSelectedGenre(
      genres.find((item) => item.id === selectedGenreId) as GenreResponseProps
    );

    setIsLoading(false);
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <MoviesContext.Provider
      value={{
        genres,
        movies,
        isLoading,
        selectedGenre,
        selectedGenreId,
        handleClickButton,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export function useMovies() {
  const context = useContext(MoviesContext);

  if (!context) {
    throw Error("MoviesContext must be inside a MoviesProvider");
  }

  const {
    genres,
    movies,
    isLoading,
    selectedGenre,
    selectedGenreId,
    handleClickButton,
  } = context;

  return {
    genres,
    movies,
    isLoading,
    selectedGenre,
    selectedGenreId,
    handleClickButton,
  };
}

export default MoviesProvider;
