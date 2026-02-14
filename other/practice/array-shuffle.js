function shuffle(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array.');
  }
  const shuffledArr = [...arr]; // Create a shallow copy to avoid modifying the original array
  let currentIndex = shuffledArr.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [shuffledArr[currentIndex], shuffledArr[randomIndex]] = [
      shuffledArr[randomIndex],
      shuffledArr[currentIndex],
    ];
  }

  return shuffledArr;
}

module.exports = shuffle;
