import '../styles/header.scss';

interface HeaderProps {
  title: String;
}

export function Header(props: HeaderProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {props.title}</span></span>
      </header>
    </div>
  )
}