/* eslint-disable react/prop-types */

import '../styles/GameOverScreen.css';
import { BackIcon, RetryIcon } from '../utils/icons';

export default function GameOverScreen({
  wonGame,
  score,
  handleReplayGame,
  handleBackToMenu,
}) {
  return (
    <div className="gameOverContainer">
      {wonGame ? (
        <h1>You won the game with a score of {score}!</h1>
      ) : (
        <h1>Game Over! You lost!</h1>
      )}
      <button className="retryBtn" onClick={handleReplayGame}>
        {RetryIcon()}
      </button>
      <button onClick={handleBackToMenu}>{BackIcon()}</button>
    </div>
  );
}
