export const arrayTail = (array) => {
  const length = array == null ? 0 : array.length;
  return length ? array.slice(1) : [];
};
