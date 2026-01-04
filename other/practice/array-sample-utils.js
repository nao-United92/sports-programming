export const sample = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  return arr[Math.floor(Math.random() * arr.length)];
};
