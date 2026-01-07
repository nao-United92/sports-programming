const shuffle = (array) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for the argument.');
  }

  const result = [...array]; // Create a shallow copy to avoid mutating the original array
  let currentIndex = result.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [result[currentIndex], result[randomIndex]] = [
      result[randomIndex],
      result[currentIndex],
    ];
  }

  return result;
};

module.exports = { shuffle };