import { useState, useEffect } from 'react';
import Game from './components/Game';
import Menu from './components/Menu';
import { getHighscoreFromStorage } from './utils/storage';
import './styles/App.css';
import GameOverScreen from './components/GameOverScreen';
import { schuffleGifs } from './utils/schuffle';

function App() {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Test');
  const [limit, setLimit] = useState(10);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(getHighscoreFromStorage());
  const [clickedGifs, setClickedGifs] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [wonGame, setWonGame] = useState(false);

  const handleClick = (gif) => {
    setGifs(schuffleGifs(gifs));
    if (clickedGifs.includes(gif.id)) {
      LoseGame();
    } else {
      CorrectGuess(gif.id);
      if (HasGuessedAllCards()) {
        WinGame();
        return;
      }
    }
  };

  const HasGuessedAllCards = () => {
    return clickedGifs.length === gifs.length - 1;
  };

  const CorrectGuess = (gifId) => {
    setScore(score + 1);
    setHighScore(score + 1 > highScore ? score + 1 : highScore);
    setClickedGifs([...clickedGifs, gifId]);
  };

  const LoseGame = () => {
    setGameOver(true);
    setWonGame(false);
  };

  const WinGame = () => {
    setGameOver(true);
    setWonGame(true);
  };

  const handleBackToMenu = () => {
    setScore(0);
    setClickedGifs([]);
    setGifs([]);
    setGameStarted(false);
    setGameOver(false);
  };

  const handleReplayGame = () => {
    setScore(0);
    setClickedGifs([]);
    setGameStarted(true);
    setGameOver(false);
    setWonGame(false);
  };

  // fetches gifs from giphy api
  useEffect(() => {
    if (gameStarted === false) {
      setScore(0);
      setClickedGifs([]);
      setGifs([]);
      return;
    }
    const apiKey = 'QwBwlsrWKtd2RZJViaI2O0Y11PsvWqm1';
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=${limit}`
    )
      .then((response) => response.json())
      .then((data) => {
        setGifs(data.data);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStarted]);

  // updates high score in local storage
  useEffect(() => {
    localStorage.setItem('highscore', highScore);
  }, [highScore]);

  return (
    <div className="container">
      <h1>The Odin Project - Memory Game</h1>
      {gameStarted ? (
        <Game
          gifs={gifs}
          handleClick={handleClick}
          score={score}
          highScore={highScore}
          setGameStarted={setGameStarted}
        />
      ) : (
        <Menu
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          limit={limit}
          setLimit={setLimit}
          setGameStarted={setGameStarted}
          highScore={highScore}
          setHighScore={setHighScore}
        />
      )}
      {gameOver && (
        <GameOverScreen
          wonGame={wonGame}
          score={score}
          handleReplayGame={handleReplayGame}
          handleBackToMenu={handleBackToMenu}
        />
      )}
    </div>
  );
}

export default App;
