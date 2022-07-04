import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Search from "./components/Search";
import Rating from "./components/Rating";
import useMovies from "./api/useMovieFetch";

const App = () => {
  const { movies, getMovies, searchMovies } = useMovies();
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
        <Rating onStarChange={calculateRating} />
      </div>
      <div>
        {movies.length > 0 ? (
          <>
            <div className="flex items-center justify-center flex-wrap">
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
                  <div key={movie.id} className="p-1">
                    <Movie {...movie} />
                  </div>
                ))}
            </div>
          </>
        ) : (
          <div className="h-[100vh] flex justify-center align-center">
            <h3 className="text-black text-xl">MOVIE NOT FOUND</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
