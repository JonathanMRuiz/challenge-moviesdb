import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Search from "./components/Search";
import Rating from "./components/Rating";
import axios from "axios";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(0);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(({ data }) => setMovies(data.results))
      .catch((err) => console.log(err));
  }, []);

  let maxRating = ratingFilter * 2;
  let minRating = maxRating - 2;

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between p-2'>
        <Search setMovies={setMovies} />
        <Rating onStarChange={setRatingFilter} />
      </div>
      <div>
        {movies.length > 0 ? (
          <>
            <div className='flex items-center justify-center flex-wrap'>
              {movies
                .filter((movie) => {
                  if (ratingFilter === 0) {
                    return true;
                  }

                  return (
                    movie.vote_average >= minRating &&
                    movie.vote_average <= maxRating
                  );
                })
                .map((movie) => (
                  <div key={movie.id} className='p-1'>
                    <Movie {...movie} />
                  </div>
                ))}
            </div>
          </>
        ) : (
          <div className='h-[100vh] flex justify-center align-center'>
            <h3 className='text-black text-xl'>MOVIE NOT FOUND</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
