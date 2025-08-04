export const range = (start, end, step = 1) => {
  const result = [];
  if (step === 0) {
    throw new Error('Step cannot be zero.');
  }
  if (start < end) {
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  } else if (start > end) {
    for (let i = start; i > end; i -= step) {
      result.push(i);
    }
  }
  return result;
};
