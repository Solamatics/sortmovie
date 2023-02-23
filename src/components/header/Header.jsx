import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import user from "../../assets/user.png";
import { useDispatch } from "react-redux";
import {
  fetchAllShows,
  fetchAllMovies,
} from "../../features/movies/moviesSlice";

const Header = () => {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  const movieText = "Harry";
  const showText = "Friends";

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAllShows(term));
    dispatch(fetchAllMovies(term));
  };

  return (
    <div className="header">
      <div>
        <Link to="/" className="logo">
          Movie App
        </Link>
      </div>

      <div className="search-input">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
