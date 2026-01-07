const sample = (array) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for the argument.');
  }
  if (array.length === 0) {
    return undefined; // Or null, depending on desired behavior for empty arrays. undefined is common.
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

module.exports = { sample };
