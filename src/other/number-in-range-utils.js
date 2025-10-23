export const inRange = (number, start, end) => {
  // Ensure all inputs are numbers
  if (typeof number !== 'number' || typeof start !== 'number' || (end !== undefined && typeof end !== 'number')) {
    return false;
  }

  if (end === undefined) {
    end = start;
    start = 0;
  }
  return number >= Math.min(start, end) && number < Math.max(start, end);
};
