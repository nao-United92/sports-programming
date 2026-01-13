
export const compactStrictFalsy = (arr) => {
  if (!arr) {
    return [];
  }
  return arr.filter(Boolean);
};
