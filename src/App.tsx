import MoviesProvider from "./hooks/useMovies";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";

export function App() {
  return (
    <div className="wrapper">
      <MoviesProvider>
        <SideBar />
        <Content />
      </MoviesProvider>
    </div>
  );
}
