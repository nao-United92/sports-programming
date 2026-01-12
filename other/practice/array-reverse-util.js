export const reverse = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  return [...arr].reverse();
};
