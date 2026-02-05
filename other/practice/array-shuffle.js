const shuffle = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

module.exports = { shuffle };
