const range = (start = 0, end, step = 1) => {
  // Handle case where only one argument is provided (end)
  if (end === undefined) {
    end = start;
    start = 0;
  }

  // Validate inputs
  if (!Number.isFinite(start) || !Number.isFinite(end) || !Number.isFinite(step)) {
    return [];
  }
  if (step === 0) {
    return []; // Avoid infinite loop if step is 0
  }

  const result = [];
  let current = start;

  if (step > 0) {
    while (current < end) {
      result.push(current);
      current += step;
    }
  } else { // step < 0
    while (current > end) {
      result.push(current);
      current += step;
    }
  }

  return result;
};

module.exports = range;
