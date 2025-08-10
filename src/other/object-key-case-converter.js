const toCamel = (s) => {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};

const toSnake = (s) => {
  return s.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
};

const isObject = function (o) {
  return o === Object(o) && !Array.isArray(o) && typeof o !== 'function';
};

export function keysToCamel(o) {
  if (isObject(o)) {
    const n = {};

    Object.keys(o)
      .forEach((k) => {
        n[toCamel(k)] = keysToCamel(o[k]);
      });

    return n;
  } else if (Array.isArray(o)) {
    return o.map((i) => {
      return keysToCamel(i);
    });
  }

  return o;
}

export function keysToSnake(o) {
    if (isObject(o)) {
      const n = {};

      Object.keys(o)
        .forEach((k) => {
          n[toSnake(k)] = keysToSnake(o[k]);
        });

      return n;
    } else if (Array.isArray(o)) {
      return o.map((i) => {
        return keysToSnake(i);
      });
    }

    return o;
}