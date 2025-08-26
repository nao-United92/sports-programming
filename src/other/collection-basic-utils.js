export const forEach = (collection, iteratee) => {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      iteratee(collection[i], i, collection);
    }
  } else if (typeof collection === 'object' && collection !== null) {
    for (const key in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, key)) {
        iteratee(collection[key], key, collection);
      }
    }
  }
  return collection;
};

export const map = (collection, iteratee) => {
  const result = [];
  forEach(collection, (value, key, coll) => {
    result.push(iteratee(value, key, coll));
  });
  return result;
};

export const filter = (collection, predicate) => {
  const result = [];
  forEach(collection, (value, key, coll) => {
    if (predicate(value, key, coll)) {
      result.push(value);
    }
  });
  return result;
};

export const reduce = (collection, iteratee, accumulator) => {
  let acc = accumulator;
  let first = true;

  forEach(collection, (value, key, coll) => {
    if (first && accumulator === undefined) {
      acc = value;
      first = false;
    } else {
      acc = iteratee(acc, value, key, coll);
    }
  });
  return acc;
};
