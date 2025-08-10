// Returns a random element from an array.
export const sample = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

// Returns n random elements from an array.
export const sampleSize = (arr, n = 1) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.max(0, n));
};
