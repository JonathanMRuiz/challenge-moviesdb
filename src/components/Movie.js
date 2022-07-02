import React, { useState } from "react";
const IMG_API = process.env.REACT_APP_API_IMG;

const Movie = ({ title, poster_path, overview, vote_average }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-blue-800 dark:border-gray-700'>
        <img
          className='rounded-t-lg'
          src={IMG_API + poster_path}
          alt={title}
          onClick={() => setShowModal(true)}
        />
        <div className='flex justify-center w-full p-5 h-28 bg-gray-400'>
          <h5 className='flex justify-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h5>
        </div>
      </div>
      {showModal ? (
        <>
          <div className='flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              <div className='border-0 rounded-lg  relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none'>
                <div className='relative p-6 flex justify-center'>
                  <form className=' rounded px-8 pt-6 pb-8  flex flex-col p-3 '>
                    <div className='flex flex-col items-center justify-center'>
                      <h4 className='block text-white  text-1sm '>
                        Rating: {vote_average}
                      </h4>
                      <img
                        src={IMG_API + poster_path}
                        alt={title}
                        className='h-[400px] '
                      />
                    </div>
                    <h2 className='block text-white text-2xl font-bold mb-1'>
                      {title}
                    </h2>
                    <h3 className='block text-white text-3sm mb-1'>
                      {overview}
                    </h3>
                  </form>
                </div>
                <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                  <button
                    className='text-gray-800  bg-white  font-bold uppercase text-sm px-6 py-3 rounded  outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                    onClick={() => setShowModal(false)}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Movie;
