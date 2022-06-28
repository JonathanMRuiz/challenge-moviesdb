import React, { useEffect, useState } from "react";
import notfound from "./img/notfound.png";
import Movies from "./components/Movies";
import Search from "./components/Search";
import Modal from "./components/Modal";
import Rating from "./components/Rating";

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
    <div className='bg-orange-300'>
      <div className='flex justify-between align-center p-5'>
        <h1>Jota Movies</h1>
        <Search setMovies={setMovies} />
        <Rating />
      </div>
      <div>
        {movies.length > 0 ? (
          <div>
            <div className='grid grid-cols-4'>
              {movies.map((movie) => (
                <div>
                  <Movies key={movie.id} {...movie} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className='w-full flex-col flex justify-center align-center'>
            <img src={notfound} alt='' />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
