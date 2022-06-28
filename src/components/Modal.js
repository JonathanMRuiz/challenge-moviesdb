import React, { useState } from "react";

const Modal = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className='bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
        type='button'
        onClick={() => setShowModal(true)}>
        Fill Details
      </button>
      {showModal ? <></> : null}
    </>
  );
};

export default Modal;
