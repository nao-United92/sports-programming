const clamp = (number, lower, upper) => {
  if (typeof number !== 'number' || typeof lower !== 'number' || typeof upper !== 'number') {
    return NaN;
  }
  return Math.max(lower, Math.min(number, upper));
};

export default clamp;
