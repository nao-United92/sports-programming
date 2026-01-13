const invert = (obj) => {
  if (obj === null || typeof obj !== "object") {
    throw new Error("Expected an object.");
  }
  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[obj[key]] = key;
    }
  }
  return newObj;
};

module.exports = { invert };
