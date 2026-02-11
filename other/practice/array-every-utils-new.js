const every = (arr, predicate) => {
  if (!Array.isArray(arr)) {
    return false; // Or throw an error, depending on desired behavior for non-arrays
  }
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};

export { every };
