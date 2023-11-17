/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import '../styles/MemoryCard.css';

export default function MemoryCard({ gif, handleClick, shrink }) {
  const imgRef = useRef();

  useEffect(() => {
    if (shrink) {
      imgRef.current.classList.add('shrinking');
      imgRef.current.classList.remove('growing');
    } else {
      imgRef.current.classList.add('growing');
      imgRef.current.classList.remove('shrinking');
    }
  }, [shrink]);
  return (
    <div className="cardContainer">
      <button
        className="cardButton"
        onClick={() => {
          handleClick(gif.id);
        }}
      >
        <img
          ref={imgRef}
          className={`cardImg `}
          key={gif.id}
          src={gif.images.fixed_height.url}
          alt={gif.title}
        />
      </button>
    </div>
  );
}
