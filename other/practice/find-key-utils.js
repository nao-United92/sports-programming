const findKey = (obj, predicate) => {
  if (obj == null) return undefined;

  let predicateFn = predicate;
  if (typeof predicate !== 'function') {
    predicateFn = (item) => {
      for (const key in predicate) {
        if (item[key] !== predicate[key]) {
          return false;
        }
      }
      return true;
    };
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (predicateFn(obj[key])) {
        return key;
      }
    }
  }
  return undefined;
};

module.exports = findKey;
