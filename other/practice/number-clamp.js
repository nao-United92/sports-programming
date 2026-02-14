const clamp = (value, min, max) => {
  if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('All arguments must be numbers');
  }
  if (min > max) {
    throw new Error('Min cannot be greater than max');
  }
  return Math.max(min, Math.min(value, max));
};

module.exports = { clamp };
