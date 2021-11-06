import { Button } from './Button';
import { GenreResponseProps } from '../types/types';

import '../styles/sidebar.scss';

interface SidebarProps {
  selectedGenreId: Number;
  genres: Array<GenreResponseProps>;
  handleClickButton: ( id: number ) => void;
}

export function SideBar(props: SidebarProps) {
  const { selectedGenreId, genres, handleClickButton } = props;

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}