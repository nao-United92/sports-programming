// other/practice/array-shuffle-utils.js

function arrayShuffle(arr) {
  const newArr = [...arr]; // Create a shallow copy to avoid modifying the original array
  let currentIndex = newArr.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArr[currentIndex], newArr[randomIndex]] = [
      newArr[randomIndex],
      newArr[currentIndex],
    ];
  }

  return newArr;
}

module.exports = arrayShuffle;