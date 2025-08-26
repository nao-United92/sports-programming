export const pick = (obj, keys) => {
  const newObj = {};
  for (const key of keys) {
    if (key in obj) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

export const omit = (obj, keys) => {
  const newObj = { ...obj };
  for (const key of keys) {
    delete newObj[key];
  }
  return newObj;
};
