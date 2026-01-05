const arrayChunkBy = (arr, predicate) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for the second argument (predicate).');
  }

  if (arr.length === 0) {
    return [];
  }

  const result = [];
  let currentChunk = [];

  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      if (currentChunk.length > 0) {
        result.push(currentChunk);
      }
      currentChunk = [arr[i]];
    } else {
      currentChunk.push(arr[i]);
    }
  }

  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }
  return result;
};

module.exports = arrayChunkBy;
