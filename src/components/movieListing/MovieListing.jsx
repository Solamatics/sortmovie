import React from "react";
import "./movieListing.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllMovies } from "../../features/movies/moviesSlice";
import MovieCard from "../movieCard/MovieCard";

const MovieListing = () => {
  const { movies, isLoading, shows } = useSelector((state) => state.movies);

  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movie-error">
        <h3>{movies.error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div className="show-error">
        <h3>{shows.error}</h3>
      </div>
    );

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="movie-wrapper">
      {/*movies*/}
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>

      {/*shows*/}
      <div className="show-list">
        <h2>Shows</h2>
        <div className="show-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
