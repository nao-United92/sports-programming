const intersectionBy = (...arrays) => {
  if (arrays.length === 0) {
    return [];
  }
  const iteratee = typeof arrays[arrays.length - 1] === 'function' ? arrays.pop() : (x) => x;

  if (arrays.length === 0) {
    return [];
  }

  const firstArray = arrays[0];
  const otherArrays = arrays.slice(1);

  return firstArray.filter((item) => {
    const itemValue = iteratee(item);
    return otherArrays.every((otherArr) =>
      otherArr.some((otherItem) => iteratee(otherItem) === itemValue)
    );
  });
};

export default intersectionBy;