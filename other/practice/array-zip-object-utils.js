const zipObject = (props, values) => {
  return props.reduce((obj, prop, index) => {
    obj[prop] = values[index];
    return obj;
  }, {});
};

export default zipObject;
