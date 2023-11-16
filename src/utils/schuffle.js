const schuffleGifs = (gifs) => {
  // Animation part comes here probs
  return gifs.sort(() => Math.random() - 0.5);
};

export { schuffleGifs };
