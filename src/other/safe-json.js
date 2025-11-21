const safeParse = (str, defaultValue = null) => {
  try {
    // Ensure the input is a string before parsing
    if (typeof str !== 'string') {
      throw new Error('Input must be a string.');
    }
    return JSON.parse(str);
  } catch (e) {
    return defaultValue;
  }
};

const safeStringify = (obj, defaultValue = null) => {
  try {
    return JSON.stringify(obj);
  } catch (e) {
    return defaultValue;
  }
};

module.exports = { safeParse, safeStringify };
