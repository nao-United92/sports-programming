const zipObject = (props, values) => {
  if (!Array.isArray(props) || !Array.isArray(values)) return {};
  const result = {};
  for (let i = 0; i < props.length; i++) {
    result[props[i]] = values[i];
  }
  return result;
};

module.exports = zipObject;
