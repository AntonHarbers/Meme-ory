/* eslint-disable react/prop-types */

import '../styles/GameOverScreen.css';

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
      <button onClick={handleReplayGame}>
        {wonGame ? 'Play Again' : 'Try again'}
      </button>
      <button onClick={handleBackToMenu}>Back to Menu</button>
    </div>
  );
}
