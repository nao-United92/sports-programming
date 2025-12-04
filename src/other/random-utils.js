export const random = (lower = 0, upper = 1, floating = false) => {
  if (upper === undefined) {
    upper = lower;
    lower = 0;
  }

  if (floating) {
    return Math.random() * (upper - lower) + lower;
  }

  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

export const shuffle = (array) => {
  const shuffledArray = [...array];
  let currentIndex = shuffledArray.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[currentIndex],
    ];
  }

  return shuffledArray;
};