export const getRandomInt = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number' || isNaN(min) || isNaN(max)) {
    return NaN;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  if (min > max) { // Handle cases where min becomes greater than max after ceil/floor
    return NaN; // Or throw an error, depending on desired behavior
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};