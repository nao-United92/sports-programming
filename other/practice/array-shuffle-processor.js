const shuffle = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Expected an array.");
  }
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

module.exports = { shuffle };
