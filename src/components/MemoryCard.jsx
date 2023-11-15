/* eslint-disable react/prop-types */
import '../styles/MemoryCard.css';

export default function MemoryCard({ gif, handleClick }) {
  return (
    <div className="cardContainer">
      <button className="cardButton" onClick={() => handleClick(gif)}>
        <img
          className="cardImg"
          key={gif.id}
          src={gif.images.fixed_height.url}
          alt={gif.title}
        />
      </button>
    </div>
  );
}
