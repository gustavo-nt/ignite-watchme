import { format } from "date-fns";
import { Star, Clock } from "react-feather";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";

import "../styles/movie-card.scss";
interface MovieCardProps {
  title: string;
  poster: string;
  rating: number;
  releaseDate: string;
}

export function MovieCard(props: MovieCardProps) {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w300${props.poster}`}
        alt={props.title}
      />

      <div>
        <div className="movie-info">
          <span>{props.title}</span>
          <div className="meta">
            <div>
              <Star /> {props.rating} / 10
            </div>

            <div>
              <Clock />
              {format(new Date(props.releaseDate), "yyyy", {
                locale: ptBR,
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
