
export const deepFlattenRecursiveSimple = (arr) => {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc.push(...deepFlattenRecursiveSimple(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
};
