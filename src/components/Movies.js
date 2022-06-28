import React, { useState } from "react";
import Modal from "./Modal";

const IMG_API = "https://image.tmdb.org/t/p/w500/";

const Movies = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <img className='rounded-t-lg' src={IMG_API + poster_path} alt={title} />
      <div className='p-5'>
        <h5 className='flex justify-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title}
        </h5>

        <>
          <button
            className='bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
            type='button'
            onClick={() => setShowModal(true)}>
            Details
          </button>
          {showModal ? <></> : null}
        </>
      </div>
    </div>
  );
};

export default Movies;
