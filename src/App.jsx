import "./App.scss";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import MovieDetail from "./components/movieDetail/MovieDetail";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
