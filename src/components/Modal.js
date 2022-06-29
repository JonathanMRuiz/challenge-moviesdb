import React, { useState } from "react";
import ReactModal from "react-modal";
const IMG_API = "https://image.tmdb.org/t/p/w500/";
const Modal = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }
  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <ReactModal isOpen={showModal}>
        <img src={IMG_API + poster_path} alt={title} />
        <h2 className='text-xl'>{title}</h2>
        <p className='text-sm'>{overview}</p>
        <span>Rating: {vote_average}</span>
        <p>{release_date}</p>
        <button onClick={closeModal}>Close Modal</button>
      </ReactModal>
    </>
  );
};

export default Modal;
