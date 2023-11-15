import '../styles/Menu.css';

/* eslint-disable react/prop-types */
export default function Menu({
  searchTerm,
  setSearchTerm,
  limit,
  setLimit,
  setGameStarted,
  highScore,
  setHighScore,
}) {
  return (
    <div className="menuContainer">
      <input
        type="text"
        className="searchInput"
        placeholder='Enter a gif search term, e.g. "cats"'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="number"
        max={30}
        min={1}
        className="limitInput"
        value={limit}
        onChange={(e) => {
          if (e.target.value > 30) e.target.value = 30;
          if (e.target.value < 1) e.target.value = 1;
          setLimit(e.target.value);
        }}
      />
      <button
        className="primaryBtn startGameBtn"
        onClick={() => setGameStarted(true)}
      >
        Start Game!
      </button>
      <h2>Your highest score: {highScore}</h2>
      <button
        className=" primaryBtn resetHighScoreBtn"
        onClick={() => setHighScore(0)}
      >
        Reset High Score
      </button>
    </div>
  );
}
