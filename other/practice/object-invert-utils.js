const invert = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[obj[key]] = key;
    }
  }
  return newObj;
};

export default invert;
