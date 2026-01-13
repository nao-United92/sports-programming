const shuffleInPlace = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Expected an array.");
  }
  let m = arr.length;
  // While there remain elements to shuffle.
  while (m) {
    // Pick a remaining element.
    const i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr; // Return the modified array
};

module.exports = { shuffleInPlace };
