const arrayShuffle = (arr, inPlace = false) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }

  const arrayToShuffle = inPlace ? arr : [...arr];
  let currentIndex = arrayToShuffle.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arrayToShuffle[currentIndex], arrayToShuffle[randomIndex]] = [
      arrayToShuffle[randomIndex],
      arrayToShuffle[currentIndex],
    ];
  }

  return arrayToShuffle;
};

module.exports = arrayShuffle;
