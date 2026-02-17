const arrayZip = (...arrays) => {
  if (arrays.some(arr => !Array.isArray(arr))) {
    throw new TypeError('Expected all arguments to be arrays.');
  }
  const maxLength = Math.max(...arrays.map(arr => arr.length));
  return Array.from({
    length: maxLength
  }, (_, i) => arrays.map(arr => arr[i]));
};

export default arrayZip;
