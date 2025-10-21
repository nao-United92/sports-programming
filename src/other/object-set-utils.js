const set = (obj, path, value) => {
  if (obj === null || typeof obj !== 'object') {
    return obj; // Cannot set property on non-object
  }

  const pathArray = Array.isArray(path) ? path : path.split('.').filter(i => i.length);
  let current = obj;

  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];

    if (i === pathArray.length - 1) {
      current[key] = value;
    } else {
      if (current[key] === null || typeof current[key] !== 'object') {
        // Determine if the next key looks like an array index
        const nextKey = pathArray[i + 1];
        current[key] = String(Number(nextKey)) === nextKey && Number(nextKey) >= 0 ? [] : {};
      }
      current = current[key];
    }
  }

  return obj;
};

module.exports = { set };
