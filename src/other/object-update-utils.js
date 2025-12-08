const get = require('./object-get-utils');
const set = require('./object-set-utils');

const update = (obj, path, updater) => {
  const currentValue = get(obj, path);
  const newValue = updater(currentValue);
  return set(obj, path, newValue);
};

module.exports = update;
