const pick = (obj, keys) =>
  Object.fromEntries(keys.map(key => [key, obj[key]]));

module.exports = pick;