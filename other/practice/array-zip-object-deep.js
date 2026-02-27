const set = (obj, path, value) => {
  const keys = path.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current)) {
      current[key] = {};
    }
    current = current[key];
  }
  current[keys[keys.length - 1]] = value;
};

const zipObjectDeep = (props, values) => {
  const result = {};
  for (let i = 0; i < props.length; i++) {
    set(result, props[i], values[i]);
  }
  return result;
};

module.exports = zipObjectDeep;
