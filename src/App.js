import React, { useEffect, useState } from "react";
//import notfound from "./img/notfound.png";
import Movie from "./components/Movie";
import Search from "./components/Search";
import Rating from "./components/Rating";

const App = () => {
  const [movies, setMovies] = useState([]);

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

  return (
    <div className='bg-gray-300'>
      <div className='flex justify-between p-2'>
        <Search setMovies={setMovies} />
        <Rating />
      </div>
      <div>
        {movies.length > 0 ? (
          <>
            <div className='flex justify-between flex-wrap'>
              {movies.map((movie) => (
                <div className='p-1'>
                  <Movie key={movie.id} {...movie} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className='h-[100vh] flex justify-center align-center'>
            {/* <img src={notfound} alt='' className='h-[90vh]' /> */}
            <h3 className='text-black text-xl'>MOVIE NOT FOUND</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
