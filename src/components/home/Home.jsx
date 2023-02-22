import { useEffect, useState } from "react";
import MovieListing from "../movieListing/MovieListing";
import "./home.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllMovies, fetchAllShows } from "../../features/movies/moviesSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMovies());
    dispatch(fetchAllShows());
  }, []);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;
