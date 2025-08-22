export const xor = (...arrays) => {
  const allElements = [].concat(...arrays);
  const counts = allElements.reduce((acc, val) => {
    const key = JSON.stringify(val);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  return allElements.filter(val => counts[JSON.stringify(val)] === 1);
};
