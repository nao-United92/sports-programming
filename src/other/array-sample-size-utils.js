const sampleSize = (arr, n = 1) => {
  if (!Array.isArray(arr) || n < 0) {
    return [];
  }
  const len = arr.length;
  if (n >= len) {
    return [...arr];
  }

  const result = [];
  const copiedArr = [...arr]; // Create a copy to avoid modifying the original array
  while (result.length < n) {
    const randomIndex = Math.floor(Math.random() * copiedArr.length);
    result.push(copiedArr[randomIndex]);
    copiedArr.splice(randomIndex, 1); // Remove selected element to avoid duplicates
  }
  return result;
};

module.exports = { sampleSize };