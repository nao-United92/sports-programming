const shuffleArray = (array) => {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array.');
  }
  const newArray = [...array]; // Create a shallow copy to avoid modifying the original array
  let currentIndex = newArray.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }

  return newArray;
};

module.exports = shuffleArray;