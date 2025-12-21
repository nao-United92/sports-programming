const keyBy = (arr, key) =>
  arr.reduce((acc, item) => {
    acc[item[key]] = item;
    return acc;
  }, {});

export default keyBy;
