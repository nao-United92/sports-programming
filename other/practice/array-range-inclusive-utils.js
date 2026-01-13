
export const rangeInclusive = (start, end, step = 1) => {
  const result = [];
  if (step <= 0) {
    throw new Error('Step must be a positive number.');
  }

  if (start <= end) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else { // start > end
    for (let i = start; i >= end; i -= step) {
      result.push(i);
    }
  }
  return result;
};
