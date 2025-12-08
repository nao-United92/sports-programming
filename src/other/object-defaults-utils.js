// Assigns own and inherited enumerable string keyed properties of source objects
// to the destination object for all destination properties that are undefined.
const defaults = (obj, ...sources) => {
  const newObj = { ...obj }; // Start with a shallow copy
  
  sources.forEach(source => {
    if (source) {
      for (const key in source) {
        // Only set the value if the key is undefined on the new object
        if (newObj[key] === undefined) {
          newObj[key] = source[key];
        }
      }
    }
  });

  return newObj;
};

module.exports = defaults;
