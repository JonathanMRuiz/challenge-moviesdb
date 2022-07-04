import axios from "axios";
import { useCallback, useState } from "react";

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = useCallback(() => {
    setIsLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(({ data }) => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  const searchMovies = (searchMovie) => {
    setIsLoading(true);

    axios
      .get(
        ` ${process.env.REACT_APP_API_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchMovie}`
      )
      .then(({ data }) => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return {
    movies,
    searchMovies,
    getMovies,
    isLoading,
  };
};

export default useMovies;
