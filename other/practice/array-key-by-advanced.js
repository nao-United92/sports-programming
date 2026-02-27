const keyByAdvanced = (array, keyOrFunc) => {
  if (!Array.isArray(array)) {
    return {};
  }
  return array.reduce((acc, item) => {
    const key = typeof keyOrFunc === 'function' ? keyOrFunc(item) : item[keyOrFunc];
    acc[key] = item;
    return acc;
  }, {});
};

module.exports = keyByAdvanced;
