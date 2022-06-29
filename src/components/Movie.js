import React, { useState } from "react";
import Modal from "./Modal";

const IMG_API = "https://image.tmdb.org/t/p/w500/";

const Movie = ({ title, poster_path }) => {
  console.log();
  return (
    <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <img className='rounded-t-lg' />
      <div className='p-5'>
        <h5 className='flex justify-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'></h5>
      </div>
    </div>
  );
};

export default Movie;
