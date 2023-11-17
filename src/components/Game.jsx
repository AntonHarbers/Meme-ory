import MemoryCard from './MemoryCard';
import '../styles/Game.css';
import { BackIcon } from '../utils/icons';

/* eslint-disable react/prop-types */
export default function Game({
  gifs,
  handleClick,
  score,
  highScore,
  setGameStarted,
  shrink,
}) {
  return (
    <div className="gameContainer">
      <h2 className="liveScorePanel">
        Score: {score} | High Score: {highScore}
      </h2>
      <div className="cardsContainer">
        {gifs.length > 0 ? (
          gifs.map((gif) => (
            <MemoryCard
              key={gif.id}
              gif={gif}
              handleClick={handleClick}
              shrink={shrink}
            />
          ))
        ) : (
          <h1 className="loadingPlaceholder">Loading...</h1>
        )}
      </div>
      <button className="backBtn" onClick={() => setGameStarted(false)}>
        {BackIcon()}
      </button>
    </div>
  );
}
