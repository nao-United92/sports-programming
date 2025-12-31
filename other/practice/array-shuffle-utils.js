// Shuffles an array randomly using the Fisher-Yates (Knuth) algorithm.
export const shuffle = (arr) => {
  const newArr = [...arr]; // Create a shallow copy to avoid mutating the original array
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
};