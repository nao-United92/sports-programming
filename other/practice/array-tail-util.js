export const tail = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.slice(1);
};
