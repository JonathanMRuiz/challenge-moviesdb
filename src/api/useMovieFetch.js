import axios from "axios";
import { useCallback, useState } from "react";

const useMovies = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = useCallback(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(({ data }) => setMovies(data.results))
      .catch((err) => console.log(err));
  }, []);

  const searchMovies = (searchMovie) => {
    console.log(searchMovie);
    axios
      .get(
        ` ${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchMovie}`
      )
      .then(({ data }) => {
        console.log(data);
        setMovies(data.results);
      })
      .catch((err) => console.log(err));
  };

  return {
    movies,
    searchMovies,
    getMovies,
  };
};

export default useMovies;
