import { useEffect, useState } from "react";
import MovieListing from "../movieListing/MovieListing";
import "./home.scss";
import { useDispatch } from "react-redux";
import { fetchAllMovies, fetchAllShows } from "../../features/movies/moviesSlice";

const Home = () => {
  const dispatch = useDispatch();

  const moviesText ="Harry";
  const showsText = "Friends"

  useEffect(() => {
    dispatch(fetchAllMovies(moviesText));
    dispatch(fetchAllShows(showsText));
  }, []);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;
