import { Route, NavLink } from "react-router-dom";
import MovieDetails from "../MovieDetails";

function Movies({ movies }) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        {movies.map((movie) => (
          <NavLink key={movie.id} id={movie.id} to={`/movies/${movie.id}`}>
            {movie.title}
          </NavLink>
        ))}
      </nav>
      <Route path="/movies/:movieId">
        <MovieDetails movies={movies} />
      </Route>
    </div>
  );
}

export default Movies;
