import React, { useEffect, useState } from "react";
import notfound from "./img/notfound.png";
import Movie from "./components/Movie";
import Search from "./components/Search";
import Modal from "./components/Modal";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=7ee5b6aa823d69ca4af4d1322cbd63ed";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className='bg-blue-900'>
      <div className='flex justify-between align-center p-5'>
        <a href='#'>Jota Movies</a>
        <Search setMovies={setMovies} />
      </div>
      <div>
        {movies.length > 0 ? (
          <div>
            <div className='grid grid-cols-4'>
              {movies.map((movie) => (
                <div>
                  <Movie key={movie.id} {...movie} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className='w-full flex-col flex justify-center align-center'>
            <img src={notfound} alt='' className='h-[90vh]' />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
