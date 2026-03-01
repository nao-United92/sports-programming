const arrayZipObject = (props, values) => {
  return props.reduce((obj, prop, index) => {
    obj[prop] = values[index];
    return obj;
  }, {});
};

module.exports = arrayZipObject;
