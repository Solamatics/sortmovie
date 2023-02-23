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
  selectedMovieOrShow: {},
};

export const fetchAllMovies = createAsyncThunk(
  "movies/fetchAllMovies",
  async (term) => {
    try {
      const movieText = "Harry";
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=movie`,
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const fetchAllShows = createAsyncThunk(
  "movies/fetchAllShows",
  async (term) => {
    try {
      const showText = "Friends";
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=series`,
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
);

export const fetchMovieOrShowDetail = createAsyncThunk(
  "movies/fetchMovieOrShowDetail",
  async (id) => {
    try {
      const response = await movieApi.get(
        `?apiKey=${APIKey}&i=${id}&Plot=full`,
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
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
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
      })
      .addCase(fetchMovieOrShowDetail.fulfilled, (state, { payload }) => {
        state.selectedMovieOrShow = payload;
      });
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;

export default movieSlice.reducer;
