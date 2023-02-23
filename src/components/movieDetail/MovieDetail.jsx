import React, { useEffect } from "react";
import "./movieDetail.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieOrShowDetail } from "../../features/movies/moviesSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();

  const { selectedMovieOrShow } = useSelector((state) => state.movies);

  console.log(selectedMovieOrShow);

  useEffect(() => {
    dispatch(fetchMovieOrShowDetail(imdbID));
  }, [imdbID]);

  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">{selectedMovieOrShow.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className="fa fa-star"></i>:
            {selectedMovieOrShow.imdbRating}
          </span>
          <span>
            IMDB Votes <i className="fa fa-thumbs-up"></i>:
            {selectedMovieOrShow.imdbVotes}
          </span>
          <span>
            Runtime <i className="fa fa-film"></i>:{selectedMovieOrShow.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calendar"></i>:{selectedMovieOrShow.Year}
          </span>
        </div>
        <div className="movie-plot">{selectedMovieOrShow.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <spa>{selectedMovieOrShow.Director}</spa>
          </div>

          <div>
            <span>Stars</span>
            <spa>{selectedMovieOrShow.Actors}</spa>
          </div>

          <div>
            <span>Genres</span>
            <spa>{selectedMovieOrShow.Genre}</spa>
          </div>

          <div>
            <span>Awards</span>
            <spa>{selectedMovieOrShow.Awards}</spa>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={selectedMovieOrShow.Poster} alt={selectedMovieOrShow.Title} />
      </div>
    </div>
  );
};

export default MovieDetail;
