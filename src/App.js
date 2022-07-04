import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Search from "./components/Search";
import Rating from "./components/Rating";
import useMovies from "./api/useMovieFetch";

const App = () => {
  const { movies, getMovies, searchMovies, isLoading } = useMovies();
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleSearch = (searchMovie) => {
    searchMovies(searchMovie);
  };

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const calculateRating = (rating) => {
    setRatingFilter(rating * 2);
  };

  let minRating = ratingFilter - 2;

  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-2">
        <Search onSearchChange={handleSearch} />
        <Rating onStarChange={calculateRating} isLoading={isLoading} />
      </div>

      <div>
        {isLoading ? (
          "Cargando"
        ) : movies.length > 0 ? (
          <>
            <ul className="flex items-center justify-center flex-wrap">
              {movies
                .filter((movie) => {
                  if (ratingFilter === 0) {
                    return true;
                  }

                  return (
                    movie.vote_average >= minRating &&
                    movie.vote_average <= ratingFilter
                  );
                })
                .map((movie) => (
                  <li key={movie.id} className="p-1">
                    <Movie {...movie} />
                  </li>
                ))}
            </ul>
          </>
        ) : (
          <div className="h-[100vh] flex justify-center items-center">
            <p className="text-black text-xl">Pelicula no encontrada</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
