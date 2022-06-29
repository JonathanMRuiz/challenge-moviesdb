import React, { useState } from "react";
import Modal from "./Modal";

const IMG_API = "https://image.tmdb.org/t/p/w500/";

const Movies = ({ title, poster_path, vote_average }) => {
  return (
    <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <img className='rounded-t-lg' src={IMG_API + poster_path} alt={title} />
      <div className='p-5'>
        <h5 className='flex justify-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title}
        </h5>
      </div>
    </div>
  );
};

export default Movies;
