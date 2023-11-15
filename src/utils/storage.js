const getHighscoreFromStorage = () => {
  const record = localStorage.getItem('highscore');
  if (record) {
    return record;
  }

  return 0;
};

export { getHighscoreFromStorage };
