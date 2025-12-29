export const chunk = (array, size) => {
  if (!array || array.length === 0 || size <= 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};