import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import movieApi from "../../components/api/movieApi";
// import { APIKey } from "./../components/api/MovieApiKey";
import movieApi from "../../components/api/movieApi";
import { APIKey } from "../../components/api/MovieApiKey";

const initialState = {
  movies: {},
  isLoading: true,
  shows: {},
};

export const fetchAllMovies = createAsyncThunk(
  "movies/fetchAllMovies",
  async () => {
    try {
      const movieText = "Harry";
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`,
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const fetchAllShows = createAsyncThunk(
  "movies/fetchAllShows",
  async () => {
    try {
      const showText = "Friends";
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${showText}&type=series`,
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeMovies: (state, { payload }) => {
      state.movies = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(fetchAllMovies.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchAllShows.fulfilled, (state, { payload }) => {
        state.shows = payload;
      });
  },
});

export const { removeMovies } = movieSlice.actions;

export default movieSlice.reducer;
