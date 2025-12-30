const randomInRange = (min = 0, max = 1) => {
  if (typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  }
  return Math.random() * (max - min) + min;
};

export default randomInRange;
