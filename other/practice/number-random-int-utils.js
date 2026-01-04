export const getRandomInt = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number' || !Number.isInteger(min) || !Number.isInteger(max)) {
    throw new TypeError('Expected min and max to be integers');
  }
  if (min > max) {
    throw new Error('Min cannot be greater than max');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
