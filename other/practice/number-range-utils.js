export const range = (start, end, step = 1) => {
  const result = [];
  if (step === 0) {
    return [start];
  }
  if (start < end) {
    if (step < 0) return [];
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  } else {
    if (step > 0) return [];
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  }
  return result;
};
