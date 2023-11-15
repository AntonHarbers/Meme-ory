import { useState, useEffect } from 'react';
import Game from './components/Game';
import Menu from './components/Menu';
import { getHighscoreFromStorage } from './utils/storage';
import './styles/App.css';

function App() {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Test');
  const [limit, setLimit] = useState(10);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(getHighscoreFromStorage());
  const [clickedGifs, setClickedGifs] = useState([]);

  const handleClick = (gif) => {
    if (clickedGifs.includes(gif.id)) {
      setScore(0);
      setClickedGifs([]);
    } else {
      setScore(score + 1);
      setHighScore(score + 1 > highScore ? score + 1 : highScore);
      setClickedGifs([...clickedGifs, gif.id]);
    }
    schuffleGifs();
  };

  const schuffleGifs = () => {
    const shuffledGifs = gifs.sort(() => Math.random() - 0.5);
    setGifs(shuffledGifs);
  };

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
  }, [gameStarted]);

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
    </div>
  );
}

export default App;
