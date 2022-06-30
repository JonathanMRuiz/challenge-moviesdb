import React, { useEffect, useState } from "react";
//import notfound from "./img/notfound.png";
import Movie from "./components/Movie";
import Search from "./components/Search";
import Rating from "./components/Rating";

const App = () => {
  // const { movies, searchMovies, getPopularMovies } = useMoviesAPI();

  const [movies, setMovies] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(0);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const API_URL =
      "https://api.themoviedb.org/3/movie/popular?api_key=7ee5b6aa823d69ca4af4d1322cbd63ed";
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  // podemos hacer un efecto que llame a la api de search
  // cada vez que cambie searchMovie (si tiene algo)

  let maxRating = ratingFilter * 2;
  let minRating = maxRating - 2;

  return (
    <div className="bg-gray-300">
      <div className="flex justify-between p-2">
        <Search setMovies={setMovies} />
        <Rating onStarChange={setRatingFilter} />
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
                    movie.vote_average <= maxRating
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
            {/* <img src={notfound} alt='' className='h-[90vh]' /> */}
            <h3 className="text-black text-xl">MOVIE NOT FOUND</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
