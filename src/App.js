import React, { useEffect, useState } from "react";
import Movies from "./components/Movies";

const API_URL =
  "https://api.themoviedb.org/3/movie/550?api_key=7ee5b6aa823d69ca4af4d1322cbd63ed";

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
    <div>
      {movies.map((m) => (
        <Movies />
      ))}
    </div>
  );
};

export default App;
