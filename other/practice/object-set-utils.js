const set = (obj, path, value) => {
  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);
  if (!pathArray || pathArray.length === 0) {
    return obj;
  }

  pathArray.reduce((acc, key, i) => {
    if (i === pathArray.length - 1) {
      acc[key] = value;
    } else {
      if (!acc[key] || typeof acc[key] !== 'object') {
        // Look ahead to see if the next key is a number, to decide between array and object
        const nextKeyIsNumber = /^\d+$/.test(pathArray[i + 1]);
        acc[key] = nextKeyIsNumber ? [] : {};
      }
    }
    return acc[key];
  }, obj);

  return obj;
};

module.exports = { set };
