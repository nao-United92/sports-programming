const groupByCaseInsensitive = (arr, key) => {
  if (!Array.isArray(arr) || !key) {
    return {};
  }

  return arr.reduce((acc, obj) => {
    const value = obj[key];
    const normalizedKey = typeof value === 'string' ? value.toLowerCase() : value;
    if (!acc[normalizedKey]) {
      acc[normalizedKey] = [];
    }
    acc[normalizedKey].push(obj);
    return acc;
  }, {});
};

export default groupByCaseInsensitive;