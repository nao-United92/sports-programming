const set = (obj, path, value) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const pathArray = Array.isArray(path) ? path : path.split('.');
  const newObj = JSON.parse(JSON.stringify(obj));
  let current = newObj;

  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];
    if (i === pathArray.length - 1) {
      current[key] = value;
    } else {
      if (current[key] === undefined || typeof current[key] !== 'object' || current[key] === null) {
        current[key] = {};
      }
      current = current[key];
    }
  }

  return newObj;
};

module.exports = set;